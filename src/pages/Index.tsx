import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Аварийный Комиссар
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Услуги
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">
                Отзывы
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Экстренный вызов аварийного комиссара
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Выезд на место ДТП в Ставрополе за{" "}
                <span className="text-red-600 font-bold">10 минут</span>.
                Круглосуточно. Оформление всех документов на месте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Вызвать комиссара
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            <div className="lg:pl-12">
              <img
                src="/img/36796112-8254-4f04-ac1d-839a908ec943.jpg"
                alt="Аварийный комиссар"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900">
                Экстренный вызов комиссара
              </CardTitle>
              <CardDescription className="text-lg">
                Заполните форму и мы свяжемся с вами в течение 2 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Номер телефона
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Адрес происшествия
                </label>
                <Input placeholder="Укажите точный адрес или ближайший ориентир" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Краткое описание ситуации
                </label>
                <Textarea
                  placeholder="Опишите что произошло, количество участников ДТП, есть ли пострадавшие"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                <Icon name="AlertTriangle" className="mr-2 h-5 w-5" />
                Отправить экстренный вызов
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для быстрого решения проблем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Круглосуточная работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Работаем 24/7 без выходных и праздников
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Zap"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Экстренный выезд</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Прибытие на место происшествия за 10 минут
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="FileText"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Оформление документов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Составление всех необходимых документов на месте
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Shield"
                  className="h-12 w-12 text-red-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Работа со страховыми</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Взаимодействие со всеми страховыми компаниями
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Camera" className="h-8 w-8 text-red-600" />
                <CardTitle>Фото и видео фиксация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Профессиональная фото и видео съемка места происшествия для
                  документирования всех повреждений и обстоятельств ДТП
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Users" className="h-8 w-8 text-red-600" />
                <CardTitle>Представление интересов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Защита ваших интересов при взаимодействии с ГИБДД, страховыми
                  компаниями и другими участниками ДТП
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Приехали очень быстро, оформили все документы четко и
                  профессионально. Помогли разобраться со страховой.
                  Рекомендую!"
                </p>
                <p className="font-semibold text-gray-900">— Александр М.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличный сервис! Работают круглосуточно, приехали даже в 3
                  часа ночи. Профессионально сделали фото и оформили все
                  документы."
                </p>
                <p className="font-semibold text-gray-900">— Елена К.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="h-5 w-5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Спасибо за оперативность! Реально приехали за 10 минут.
                  Помогли во всем разобраться, взяли на себя общение со
                  страховой."
                </p>
                <p className="font-semibold text-gray-900">— Дмитрий В.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Phone"
                className="h-12 w-12 text-red-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Телефон
              </h3>
              <p className="text-2xl font-bold text-red-600">
                +7 (8652) 123-456
              </p>
              <p className="text-gray-600">Круглосуточно</p>
            </div>

            <div className="text-center">
              <Icon
                name="MessageCircle"
                className="h-12 w-12 text-red-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WhatsApp
              </h3>
              <p className="text-lg text-gray-600">
                Быстрая связь и отправка фото
              </p>
              <Button variant="outline" className="mt-2">
                Написать в WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <Icon
                name="MapPin"
                className="h-12 w-12 text-red-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Зона покрытия
              </h3>
              <p className="text-lg text-gray-600">Ставрополь и область</p>
              <p className="text-gray-600">Выезд в любую точку</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">Аварийный Комиссар</h3>
              </div>
              <p className="text-gray-400">
                Профессиональные услуги аварийного комиссара в Ставрополе.
                Работаем круглосуточно для вашей безопасности.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Экстренный выезд на ДТП</li>
                <li>Оформление документов</li>
                <li>Фото и видео фиксация</li>
                <li>Работа со страховыми</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Телефон: +7 (8652) 123-456</p>
                <p>WhatsApp: +7 (8652) 123-456</p>
                <p>Ставрополь и область</p>
                <p>Работаем круглосуточно</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Аварийный Комиссар Ставрополь. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
