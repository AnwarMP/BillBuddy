import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";

const AboutPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-100 to-yellow-100 flex flex-col items-center">
      <div className="flex justify-center items-center w-full h-16 bg-black">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 text-white">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-gray-400 p-2">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-gray-400 p-2">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="hover:text-gray-400 p-2">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>

      <div className="max-w-4xl mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">About BillBuddy</h1>
        <p className="text-lg text-gray-700 mb-4">
          BillBuddy is a powerful tool designed to simplify health insurance by using advanced AI technology to analyze and break down complex insurance policies into clear, understandable insights. Users can upload their insurance policy documents and receive instant, accurate answers to any questions about their coverage, deductibles, premiums, and more. BillBuddy aims to empower individuals to make confident healthcare decisions by providing clarity and peace of mind.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Inspiration</h2>
        <p className="text-lg text-gray-700 mb-4">
          At BillBuddy, we are driven by the widespread frustration and confusion many face when trying to understand their health insurance policies. Even the most diligent individuals struggle with dense, jargon-filled documents and a lack of clear, accessible information. Recognizing this critical need, we set out to transform complicated texts into understandable insights.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          According to the Center for Health Care Strategies, nearly 9 out of 10 adults in the United States struggle with health literacy. With this in mind, we aim to bridge the knowledge gap using advanced AI technology, empowering individuals to make confident healthcare decisions. Our goal is to eliminate anxiety and uncertainty, providing clarity and peace of mind.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Stories of people feeling overwhelmed by their policies inspired us to create BillBuddy, a reliable 24/7 companion that simplifies health insurance for everyone. We are committed to ensuring no one navigates the complexities of health insurance alone. You deserve to make informed, confident decisions about your healthcare, and BillBuddy is here to demystify the process.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
