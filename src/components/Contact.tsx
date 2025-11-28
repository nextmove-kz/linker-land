import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  trigger?: React.ReactNode;
  triggerText?: string;
  triggerClassName?: string;
  translations?: typeof import('@/i18n/en.json')['contact'];
}

const Contact = ({ trigger, triggerText, triggerClassName, translations }: ContactProps) => {
  const [open, setOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState("email");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Default translations (fallback to English)
  const t = translations || {
    title: "Let's work together",
    description: "Tell us how to reach you, and we'll start the conversation.",
    contactMethodLabel: "How should we contact you?",
    contactInfoLabel: "Your contact info",
    methods: {
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      other: "Other",
    },
    placeholders: {
      email: "your@email.com",
      telegram: "@yourusername",
      whatsapp: "+1234567890",
      other: "How can we reach you?",
    },
    submit: "Get in touch →",
    submitting: "Sending...",
    toasts: {
      infoRequired: {
        title: "Contact info required",
        description: "Please provide your contact information",
      },
      success: {
        title: "Message received!",
        description: "We'll get back to you shortly.",
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactInfo.trim()) {
      toast({
        title: t.toasts.infoRequired.title,
        description: t.toasts.infoRequired.description,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Map contact method to API format
    const contactTypeMap: Record<string, string> = {
      email: "Email",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      other: "Other",
    };

    try {
      const response = await fetch("https://linker-bot.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact_type: contactTypeMap[contactMethod] || "Other",
          contact_text: contactInfo.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: t.toasts.success.title,
        description: t.toasts.success.description,
      });
      setContactInfo("");
      setOpen(false);
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlaceholder = () => {
    switch (contactMethod) {
      case "email":
        return t.placeholders.email;
      case "telegram":
        return t.placeholders.telegram;
      case "whatsapp":
        return t.placeholders.whatsapp;
      default:
        return t.placeholders.other;
    }
  };

  const contactMethods = [
    { value: "email", label: t.methods.email, icon: Mail },
    { value: "telegram", label: t.methods.telegram, icon: MessageCircle },
    { value: "whatsapp", label: t.methods.whatsapp, icon: Phone },
    { value: "other", label: t.methods.other, icon: MessageCircle },
  ];

  const defaultTrigger = triggerText ? (
    <Button size="lg" className={triggerClassName || "bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"}>
      {triggerText}
    </Button>
  ) : null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {(trigger || defaultTrigger) && (
        <DialogTrigger asChild>
          {trigger || defaultTrigger}
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.title}</DialogTitle>
          <DialogDescription>
            {t.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              {t.contactMethodLabel}
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {contactMethods.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setContactMethod(value)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border-2 transition-all ${
                    contactMethod === value
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border hover:border-muted-foreground/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-info" className="text-sm font-medium">
              {t.contactInfoLabel}
            </Label>
            <Input
              id="contact-info"
              type="text"
              placeholder={getPlaceholder()}
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.submitting : t.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
