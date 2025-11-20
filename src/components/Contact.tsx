import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us how to reach you, and we'll start the conversation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-accent p-8 md:p-12 rounded-sm">
            <div className="space-y-4">
              <Label className="text-base font-medium">
                How should we contact you?
              </Label>
              <RadioGroup
                value={contactMethod}
                onValueChange={setContactMethod}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email" className="cursor-pointer font-normal">
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="telegram" id="telegram" />
                  <Label htmlFor="telegram" className="cursor-pointer font-normal">
                    Telegram
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="whatsapp" />
                  <Label htmlFor="whatsapp" className="cursor-pointer font-normal">
                    WhatsApp
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="cursor-pointer font-normal">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-info" className="text-base font-medium">
                Your contact info
              </Label>
              <Input
                id="contact-info"
                type="text"
                placeholder={getPlaceholder()}
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="text-base"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
