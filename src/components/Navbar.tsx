import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Оборудование', href: '/equipment' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-500">Game</span>
              <span className="text-2xl font-bold text-white">Zone</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-purple-500 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-purple-600 hover:bg-purple-700">Забронировать</Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-purple-500"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-purple-500 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="ml-3 w-[calc(100%-24px)] bg-purple-600 hover:bg-purple-700">
              Забронировать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
