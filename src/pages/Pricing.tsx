import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const prices = [
    {
      title: 'Стандарт PC',
      price: '150₽',
      period: 'в час',
      features: [
        'Игровой компьютер',
        'Комфортное кресло',
        'Доступ к Steam/Epic Games',
        'Базовая периферия',
      ],
    },
    {
      title: 'PRO PC',
      price: '250₽',
      period: 'в час',
      features: [
        'Топовый игровой компьютер',
        'ELITE кресло',
        'Премиум периферия',
        'Любые напитки включены',
      ],
    },
    {
      title: 'PlayStation 5',
      price: '200₽',
      period: 'в час',
      features: ['Консоль PlayStation 5', 'До 4 игроков', 'Все новинки', 'Комфортный диван'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Наши тарифы</h1>
          <p className="mb-12 text-xl text-gray-300">Выберите подходящий вариант</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {prices.map((plan) => (
            <Card key={plan.title} className="border-purple-500/20 bg-black/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-white">
                  {plan.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-500">{plan.price}</span>
                  <span className="text-gray-300"> / {plan.period}</span>
                </div>
                <ul className="mb-6 space-y-4 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
