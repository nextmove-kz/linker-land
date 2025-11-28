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
}

const Contact = ({ trigger, triggerText, triggerClassName }: ContactProps) => {
  const [open, setOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState("email");
  const [contactInfo, setContactInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactInfo.trim()) {
      toast({
        title: "Contact info required",
        description: "Please provide your contact information",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    console.log({ contactMethod, contactInfo });
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message received!",
        description: "We'll get back to you shortly.",
      });
      setContactInfo("");
      setIsSubmitting(false);
      setOpen(false);
    }, 1000);
  };

  const getPlaceholder = () => {
    switch (contactMethod) {
      case "email":
        return "your@email.com";
      case "telegram":
        return "@yourusername";
      case "whatsapp":
        return "+1234567890";
      default:
        return "How can we reach you?";
    }
  };

  const contactMethods = [
    { value: "email", label: "Email", icon: Mail },
    { value: "telegram", label: "Telegram", icon: MessageCircle },
    { value: "whatsapp", label: "WhatsApp", icon: Phone },
    { value: "other", label: "Other", icon: MessageCircle },
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
          <DialogTitle className="text-2xl">Let's work together</DialogTitle>
          <DialogDescription>
            Tell us how to reach you, and we'll start the conversation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              How should we contact you?
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
              Your contact info
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
            {isSubmitting ? "Sending..." : "Get in touch →"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
