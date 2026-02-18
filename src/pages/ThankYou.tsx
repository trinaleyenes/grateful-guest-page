import { CheckCircle, Calendar, MapPin, Users, ArrowRight, Mail, Phone } from "lucide-react";
import workshopCrowd from "@/assets/workshop-crowd.jpg";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Banner */}
      <div
        style={{ background: "hsl(var(--brand-red))" }}
        className="w-full py-3 text-center"
      >
        <p className="text-sm font-700 tracking-widest uppercase font-bold text-white">
          🎉 Registration Confirmed — You're In!
        </p>
      </div>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          background: `linear-gradient(180deg, hsl(220 25% 4% / 0.97) 0%, hsl(220 25% 8% / 0.92) 100%), url(${workshopCrowd}) center/cover no-repeat`,
        }}
      >
        {/* Animated checkmark */}
        <div className="flex justify-center mb-8">
          <div
            className="animate-bounce-in w-24 h-24 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{ background: "hsl(var(--brand-red))" }}
          >
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>

        <div className="animate-fade-up">
          <span className="badge-pill mb-6 inline-block">
            ✅ Exclusive 3-Day Workshop
          </span>
        </div>

        <h1 className="animate-fade-up-delay text-5xl md:text-7xl font-black text-white leading-tight mt-6 mb-4">
          You're{" "}
          <span className="text-brand-red">Officially</span>
          <br />
          On The List!
        </h1>

        <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
          Your seat deposit for the{" "}
          <strong className="text-white">3-Day AI Implementation Workshop</strong>{" "}
          has been secured. Here's everything you need to know.
        </p>

        {/* Event Details Card */}
        <div className="animate-fade-up-delay-2 card-dark max-w-2xl mx-auto mt-12 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "hsl(var(--brand-red) / 0.15)" }}
              >
                <Calendar className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Date</p>
              <p className="text-white font-bold text-lg">Mar 24–26, 2026</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "hsl(var(--brand-red) / 0.15)" }}
              >
                <MapPin className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Location</p>
              <p className="text-white font-bold text-lg">Jacksonville, FL</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "hsl(var(--brand-red) / 0.15)" }}
              >
                <Users className="w-5 h-5 text-brand-red" />
              </div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Capacity</p>
              <p className="text-white font-bold text-lg">100 Pro Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
            What Happens <span className="text-brand-red">Next</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-14">
            Here's your simple 3-step path to being fully prepared for the workshop
          </p>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Check Your Email",
                desc: "You'll receive a confirmation email within the next 5 minutes with your receipt and booking details. Check your spam folder just in case.",
                icon: <Mail className="w-6 h-6 text-white" />,
              },
              {
                step: "02",
                title: "Join the Private Community",
                desc: "You'll be invited to our exclusive members-only group where you can connect with other attendees and get pre-workshop resources from Francis, Brian, Dolmar & Richard.",
                icon: <Users className="w-6 h-6 text-white" />,
              },
              {
                step: "03",
                title: "Block Your Calendar",
                desc: "Reserve March 24–26, 2026 in Jacksonville, FL. Hotel recommendations and travel tips will be sent to you within 48 hours.",
                icon: <Calendar className="w-6 h-6 text-white" />,
              },
            ].map((item) => (
              <div key={item.step} className="card-dark p-8 flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white"
                    style={{ background: "hsl(var(--brand-red))" }}
                  >
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section
        className="py-20 px-4"
        style={{ background: "hsl(var(--dark-card))" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
            You're Getting Access To <span className="text-brand-red">All of This</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-14">
            A reminder of the incredible value you've locked in
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Your personal 90-Day AI Implementation Roadmap",
              "Live hot-seat sessions with Francis, Brian, Dolmar & Richard",
              "Step-by-step workshops to turn your Pro membership into real working systems",
              "3 full days of deep focus — accomplish more in 72 hours than months of online learning",
              "Networking with 100 elite Pro Members ready to grow",
              "Live demonstrations of the latest AI tools for business",
              "Templates, frameworks, and implementation checklists",
              "Recordings of every session you attend",
            ].map((item, i) => (
              <div key={i} className="checkmark-item text-white leading-relaxed">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Share / Excitement Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "hsl(var(--brand-red) / 0.15)" }}
          >
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            You Made the Right<br />
            <span className="text-brand-red">Decision.</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-10">
            Most Pro Members are stuck staring at their dashboard wondering where to start.{" "}
            <strong className="text-white">You just took the step that changes that.</strong>{" "}
            We'll see you in Jacksonville!
          </p>

          <a
            href="https://ai4bcore.lovable.app"
            className="btn-cta"
            style={{ display: "inline-flex" }}
          >
            Back to Main Site <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-muted-foreground text-sm mt-8">
            Questions? Email us at{" "}
            <a
              href="mailto:support@ai4businesscore.com"
              className="text-brand-red hover:underline"
            >
              support@ai4businesscore.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 text-center border-t"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <p className="text-muted-foreground text-sm">
          © 2026 AI4Business Core · All Rights Reserved ·{" "}
          <span className="text-muted-foreground">Inc. 5000 Company 4x</span>
        </p>
      </footer>
    </div>
  );
};

export default ThankYou;
