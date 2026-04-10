import { useState } from "react";
import { FadeIn } from "./FadeIn"; from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "yes",
    guests: "1",
    dietary: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    toast.success("Thank you for your RSVP! We can't wait to celebrate with you!");
    setFormData({
      name: "",
      email: "",
      attendance: "yes",
      guests: "1",
      dietary: "",
      message: ""
    });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <FadeIn direction="up" duration={900}><div className="max-w-2xl mx-auto">
        <h2 className="text-5xl text-center mb-6 font-serif">RSVP</h2>
        <p className="text-center text-gray-600 mb-12">
          We would be honored by your presence. Please respond by May 1, 2026.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-lg shadow-lg">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Smith"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-3">
            <Label>Will you be attending? *</Label>
            <RadioGroup 
              value={formData.attendance}
              onValueChange={(value) => setFormData({...formData, attendance: value})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer">
                  Joyfully accepts
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer">
                  Regretfully declines
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.attendance === "yes" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => setFormData({...formData, dietary: e.target.value})}
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Message to the Couple</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Share your well wishes..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit RSVP
          </Button>
        </form>
      </div>
    </div></FadeIn></section>
  );
}
