import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Monitor, Gamepad, Coffee, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="relative pt-16">
        {/* Hero Section */}
        <div className='flex min-h-[80vh] items-center justify-center bg-[url("/images/hero-bg.jpg")] bg-cover bg-center bg-no-repeat'>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-6xl">
              Добро пожаловать в<span className="block text-purple-500">GameZone</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Погрузись в мир игр на самом современном оборудовании
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/pricing">Забронировать место</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-purple-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Monitor className="mb-4 h-12 w-12 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Мощные PC</h3>
                <p className="text-gray-300">RTX 4090, Intel i9, 32GB RAM</p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Gamepad className="mb-4 h-12 w-12 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">PlayStation 5</h3>
                <p className="text-gray-300">Все новинки игровой индустрии</p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Coffee className="mb-4 h-12 w-12 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Комфорт</h3>
                <p className="text-gray-300">Уютная атмосфера и напитки</p>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-black/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-4 h-12 w-12 text-purple-500" />
                <h3 className="mb-2 text-xl font-bold text-white">Турниры</h3>
                <p className="text-gray-300">Регулярные игровые события</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
