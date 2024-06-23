import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu";
  
  const ContactPage = () => {
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
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            If you have any questions or need further assistance, please visit our GitHub repository and add an issue. We are always here to help!
          </p>
          <div className="text-center mt-4">
            <a href="https://github.com/anwarmp/billbuddy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-lg">
              Visit our GitHub Repository
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  