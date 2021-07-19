<template>
  <div class="container edvlisting listing-page middle-container">
    <h1>Все категории онлайн-курсов IT и Digital</h1>

    <div class="container" v-if="!isLoading">
      <div class="content-withe">
        <div class="groups-crosslinks-wrapper">
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/programming/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/08/razrabotka-programnogo-obespecheniya-1.svg">
                <span>Программирование</span>
              </a>
            </p>

            <ul>
              <li>
                <a title="Web-разработка" href="/courses/programming/web-razrabotka/">Web-разработка</a>
              </li>
              <li>
                <a title="Мобильная разработка" href="/courses/programming/mobilnaya-razrabotka/">Мобильная
                  разработка</a></li>
              <li><a title="Java-разработка" href="/courses/programming/java-razrabotka/">Java-разработка</a>
              </li>
              <li><a title="JavaScript-разработка" href="/courses/programming/javascript-razrabotka/">JavaScript-разработка</a>
              </li>
              <li><a title="Python-разработка"
                     href="/courses/programming/python-razrabotka/">Python-разработка</a></li>
              <li><a title="Создание сайтов" href="/courses/programming/sozdanie-sajtov/">Создание сайтов</a>
              </li>
              <li class="hidden"><a title="Android-разработка" href="/courses/programming/android-razrabotka/">Android-разработка</a>
              </li>
              <li class="hidden"><a title="Frontend-разработка" href="/courses/programming/frontend-razrabotka/">Frontend-разработка</a>
              </li>
              <li class="hidden"><a title="Разработка игр" href="/courses/programming/razrabotka-igr/">Разработка
                игр</a></li>
              <li class="hidden"><a title="Системное администрирование"
                                    href="/courses/programming/sistemnoe-administrirovanie/">Системное
                администрирование</a></li>
              <li class="hidden"><a title="IOS-разработка"
                                    href="/courses/programming/ios-razrabotka/">IOS-разработка</a></li>
              <li class="hidden"><a title="Верстка на HTML/CSS" href="/courses/programming/verstka-na-html-css/">Верстка
                на HTML/CSS</a></li>
              <li class="hidden"><a title="QA-тестирование"
                                    href="/courses/programming/qa-testirovanie/">QA-тестирование</a></li>
              <li class="hidden"><a title="Разработка на C#" href="/courses/programming/razrabotka-na-c/">Разработка на
                C#</a></li>
              <li class="hidden"><a title="Разработка игр на Unity"
                                    href="/courses/programming/razrabotka-igr-na-unity/">Разработка игр на Unity</a>
              </li>
              <li class="hidden"><a title="PHP-разработка"
                                    href="/courses/programming/php-razrabotka/">PHP-разработка</a></li>
              <li class="hidden"><a title="DevOps" href="/courses/programming/devops/">DevOps</a></li>
              <li class="hidden"><a title="Управление разработкой и IT"
                                    href="/courses/programming/upravlenie-razrabotkoj-i-it/">Управление разработкой и
                IT</a></li>
              <li class="hidden"><a title="Разработка на Swift" href="/courses/programming/razrabotka-na-swift/">Разработка
                на Swift</a></li>
              <li class="hidden"><a title="Информационная безопасность"
                                    href="/courses/programming/informaczionnaya-bezopasnost/">Информационная
                безопасность</a></li>
              <li class="hidden"><a title="Разработка на C++" href="/courses/programming/razrabotka-na-c-programming/">Разработка
                на C++</a></li>
              <li class="hidden"><a title="Разработка на Kotlin" href="/courses/programming/razrabotka-na-kotlin/">Разработка
                на Kotlin</a></li>
              <li class="hidden"><a title="1C-разработка" href="/courses/programming/1c-razrabotka/">1C-разработка</a>
              </li>
              <li class="hidden"><a title="VR/AR разработка" href="/courses/programming/vr-ar-razrabotka/">VR/AR
                разработка</a></li>
              <li class="hidden"><a title="Golang-разработка" href="/courses/programming/golang-razrabotka/">Golang-разработка</a>
              </li>
              <li class="hidden"><a title="Разработка игр на Unreal Engine"
                                    href="/courses/programming/razrabotka-igr-na-unreal-engine/">Разработка игр на
                Unreal Engine</a></li>
              <li class="hidden"><a title="Фреймворк Laravel" href="/courses/programming/frejmvork-laravel/">Фреймворк
                Laravel</a></li>
              <li class="hidden"><a title="Фреймворк Django" href="/courses/programming/frejmvork-django/">Фреймворк
                Django</a></li>
              <li class="hidden"><a title="Фреймворк Spring" href="/courses/programming/frejmvork-spring/">Фреймворк
                Spring</a></li>
              <li class="hidden"><a title="Фреймворк Node.js" href="/courses/programming/frejmvork-node-js/">Фреймворк
                Node.js</a></li>
              <li class="hidden"><a title="Фреймворк ReactJS" href="/courses/programming/frejmvork-reactjs/">Фреймворк
                ReactJS</a></li>
            </ul>

            <p class="toggle" data-shown="6" data-prev-text="Свернуть">Показать еще...</p>
          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/marketing/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/08/marketing.svg">
                <span>Маркетинг</span>
              </a>
            </p>

            <ul>
              <li><a title="SMM-продвижение" href="/courses/marketing/smm-prodvizhenie/">SMM-продвижение</a>
              </li>
              <li><a title="Интернет-маркетинг" href="/courses/marketing/internet-marketing/">Интернет-маркетинг</a>
              </li>
              <li><a title="SEO-продвижение" href="/courses/marketing/seo-prodvizhenie/">SEO-продвижение</a>
              </li>
              <li><a title="Контекстная реклама" href="/courses/marketing/kontekstnaya-reklama/">Контекстная
                реклама</a></li>
              <li><a title="Таргетированная реклама" href="/courses/marketing/targetirovannaya-reklama/">Таргетированная
                реклама</a></li>
              <li><a title="Руководство маркетингом" href="/courses/marketing/rukovodstvo-marketingom/">Руководство
                маркетингом</a></li>
              <li class="hidden"><a title="Контент-маркетинг" href="/courses/marketing/kontent-marketing/">Контент-маркетинг</a>
              </li>
              <li class="hidden"><a title="Продвижение в Instagram" href="/courses/marketing/prodvizhenie-v-instagram/">Продвижение
                в Instagram</a></li>
              <li class="hidden"><a title="PR-менеджмент" href="/courses/marketing/pr-menedzhment/">PR-менеджмент</a>
              </li>
              <li class="hidden"><a title="Бренд-менеджмент" href="/courses/marketing/brend-menedzhment/">Бренд-менеджмент</a>
              </li>
              <li class="hidden"><a title="Продвижение видео" href="/courses/marketing/prodvizhenie-video/">Продвижение
                видео</a></li>
              <li class="hidden"><a title="Создание лендингов" href="/courses/marketing/sozdanie-lendingov/">Создание
                лендингов</a></li>
              <li class="hidden"><a title="CRM и email-маркетинг" href="/courses/marketing/crm-i-email-marketing/">CRM и
                email-маркетинг</a></li>
              <li class="hidden">
                <a title="Мессенджер-маркетинг и чат-боты"
                   href="/courses/marketing/messendzher-marketing-i-chat-boty/">Мессенджер-маркетинг и
                  чат-боты</a>
              </li>
              <li class="hidden">
                <a title="Маркетинг мобильных приложений"
                   href="/courses/marketing/marketing-mobilnyh-prilozhenij/">Маркетинг мобильных
                  приложений</a>
              </li>
              <li class="hidden"><a title="SERM и репутация" href="/courses/marketing/serm-i-reputacziya/">SERM и
                репутация</a></li>
              <li class="hidden"><a title="Реклама у блогеров" href="/courses/marketing/reklama-u-blogerov/">Реклама у
                блогеров</a></li>
              <li class="hidden"><a title="Управление в SMM" href="/courses/marketing/upravlenie-v-smm/">Управление в
                SMM</a></li>
            </ul>

            <p class="toggle" data-shown="6" data-prev-text="Свернуть">Показать еще...</p>
          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/dizajn/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/09/vector-1.svg">
                <span>Дизайн</span>
              </a>
            </p>

            <ul>
              <li><a title="Web-дизайн" href="/courses/dizajn/web-dizajn/">Web-дизайн</a></li>
              <li><a title="Графический дизайн" href="/courses/dizajn/graficheskij-dizajn/">Графический
                дизайн</a></li>
              <li><a title="UX/UI дизайн" href="/courses/dizajn/ux-ui-dizajn/">UX/UI дизайн</a></li>
              <li><a title="Дизайн интерьеров" href="/courses/dizajn/dizajn-intererov/">Дизайн интерьеров</a>
              </li>
              <li><a title="Создание и монтаж видео" href="/courses/dizajn/sozdanie-i-montazh-video/">Создание
                и монтаж видео</a></li>
              <li><a title="3D анимация" href="/courses/dizajn/3d-animacziya/">3D анимация</a></li>
              <li class="hidden"><a title="Motion-дизайн" href="/courses/dizajn/motion-dizajn/">Motion-дизайн</a></li>
              <li class="hidden"><a title="Дизайн мобильных приложений"
                                    href="/courses/dizajn/dizajn-mobilnyh-prilozhenij/">Дизайн мобильных приложений</a>
              </li>
              <li class="hidden"><a title="Отрисовка иллюстраций" href="/courses/dizajn/otrisovka-illyustraczij/">Отрисовка
                иллюстраций</a></li>
              <li class="hidden"><a title="3D-моделирование"
                                    href="/courses/dizajn/3d-modelirovanie/">3D-моделирование</a></li>
              <li class="hidden"><a title="Геймдизайн" href="/courses/dizajn/gejmdizajn/">Геймдизайн</a></li>
              <li class="hidden"><a title="Скетчинг" href="/courses/dizajn/sketching/">Скетчинг</a></li>
              <li class="hidden"><a title="3D MAX" href="/courses/dizajn/3d-max/">3D MAX</a></li>
              <li class="hidden"><a title="Figma" href="/courses/dizajn/figma/">Figma</a></li>
              <li class="hidden"><a title="Adobe After Effects" href="/courses/dizajn/adobe-after-effects/">Adobe After
                Effects</a></li>
              <li class="hidden"><a title="Adobe Photoshop" href="/courses/dizajn/adobe-photoshop/">Adobe Photoshop</a>
              </li>
              <li class="hidden"><a title="Типографика" href="/courses/dizajn/tipografika/">Типографика</a></li>
              <li class="hidden"><a title="Adobe Illustrator" href="/courses/dizajn/adobe-illustrator/">Adobe
                Illustrator</a></li>
            </ul>

            <p class="toggle" data-shown="6" data-prev-text="Свернуть">Показать еще...</p>
          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/analitika/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/08/analitika.svg">
                <span>Аналитика</span>
              </a>
            </p>

            <ul>
              <li><a title="Big Data" href="/courses/analitika/big-data/">Big Data</a></li>
              <li><a title="Data Science" href="/courses/analitika/data-science/">Data Science</a></li>
              <li><a title="Бизнес-аналитика" href="/courses/analitika/biznes-analitika/">Бизнес-аналитика</a>
              </li>
              <li><a title="Маркетинговая аналитика"
                     href="/courses/analitika/marketingovaya-analitika-analitika/">Маркетинговая аналитика</a>
              </li>
              <li><a title="Продуктовая аналитика" href="/courses/analitika/produktovaya-analitika/">Продуктовая
                аналитика</a></li>
              <li><a title="Web-аналитика" href="/courses/analitika/web-analitika-analitika/">Web-аналитика</a>
              </li>
              <li class="hidden"><a title="Финансовая аналитика" href="/courses/analitika/finansovaya-analitika/">Финансовая
                аналитика</a></li>
              <li class="hidden"><a title="Машинное обучение" href="/courses/analitika/mashinnoe-obuchenie/">Машинное
                обучение</a></li>
              <li class="hidden"><a title="Аналитика для руководителей"
                                    href="/courses/analitika/analitika-dlya-rukovoditelej/">Аналитика для
                руководителей</a></li>
              <li class="hidden"><a title="Data Engineering" href="/courses/analitika/data-engineering/">Data
                Engineering</a></li>
              <li class="hidden"><a title="SQL для анализа данных" href="/courses/analitika/sql-dlya-analiza-dannyh/">SQL
                для анализа данных</a></li>
              <li class="hidden"><a title="Аналитика на Power BI" href="/courses/analitika/analitika-na-power-bi/">Аналитика
                на Power BI</a></li>
              <li class="hidden"><a title="Математика для Data Science"
                                    href="/courses/analitika/matematika-dlya-data-science/">Математика для Data
                Science</a></li>
              <li class="hidden"><a title="Аналитика на Python" href="/courses/analitika/analitika-na-python/">Аналитика
                на Python</a></li>
              <li class="hidden"><a title="Deep Learning" href="/courses/analitika/deep-learning/">Deep Learning</a>
              </li>
              <li class="hidden"><a title="Нейронные сети" href="/courses/analitika/nejronnye-seti/">Нейронные сети</a>
              </li>
              <li class="hidden"><a title="Аналитика на R" href="/courses/analitika/analitika-na-r/">Аналитика на R</a>
              </li>
              <li class="hidden"><a title="Аналитика на Tableau" href="/courses/analitika/analitika-na-tableau/">Аналитика
                на Tableau</a></li>
              <li class="hidden"><a title="Системная аналитика" href="/courses/analitika/sistemnaya-analitika/">Системная
                аналитика</a></li>
              <li class="hidden"><a title="HR-аналитика" href="/courses/analitika/hr-analitika/">HR-аналитика</a></li>
              <li class="hidden"><a title="Аналитика для HR" href="/courses/analitika/analitika-dlya-hr/">Аналитика для
                HR</a></li>
            </ul>

            <p class="toggle" data-shown="6" data-prev-text="Свернуть">Показать еще...</p>
          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/upravlenie/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/08/operaczionnoe-upravlenie.svg">
                <span>Управление</span>
              </a>
            </p>

            <ul>
              <li><a title="Product-менеджмент" href="/courses/upravlenie/product-menedzhment/">Product-менеджмент</a>
              </li>
              <li><a title="Управление бизнесом" href="/courses/upravlenie/upravlenie-biznesom/">Управление
                бизнесом</a></li>
              <li><a title="Project-менеджмент" href="/courses/upravlenie/project-menedzhment/">Project-менеджмент</a>
              </li>
              <li><a title="Запуск стартапов" href="/courses/upravlenie/zapusk-startapov/">Запуск стартапов</a>
              </li>
              <li><a title="HR и управление персоналом" href="/courses/upravlenie/hr-i-upravlenie-personalom/">HR
                и управление персоналом</a></li>
              <li><a title="Финансы для руководителей" href="/courses/upravlenie/finansy-dlya-rukovoditelej/">Финансы
                для руководителей</a></li>
              <li class="hidden"><a title="Управление разработкой и IT"
                                    href="/courses/upravlenie/upravlenie-razrabotkoj-i-it-upravlenie/">Управление
                разработкой и IT</a></li>
              <li class="hidden"><a title="Управление отделом продаж"
                                    href="/courses/upravlenie/upravlenie-otdelom-prodazh/">Управление отделом продаж</a>
              </li>
              <li class="hidden"><a title="Работа с Excel и Google таблицами"
                                    href="/courses/upravlenie/rabota-s-excel-i-google-tabliczami-upravlenie/">Работа с
                Excel и Google таблицами</a></li>
              <li class="hidden"><a title="Работа с презентациями"
                                    href="/courses/upravlenie/rabota-s-prezentacziyami-upravlenie/">Работа с
                презентациями</a></li>
              <li class="hidden"><a title="Управление образовательными проектами"
                                    href="/courses/upravlenie/upravlenie-obrazovatelnymi-proektami/">Управление
                образовательными проектами</a></li>
              <li class="hidden"><a title="Управление в e-commerce" href="/courses/upravlenie/upravlenie-v-e-commerce/">Управление
                в e-commerce</a></li>
              <li class="hidden"><a title="Управление в дизайне"
                                    href="/courses/upravlenie/upravlenie-v-dizajne-upravlenie/">Управление в дизайне</a>
              </li>
              <li class="hidden"><a title="Юридические основы бизнеса"
                                    href="/courses/upravlenie/yuridicheskie-osnovy-biznesa/">Юридические основы
                бизнеса</a></li>
              <li class="hidden"><a title="Менеджмент в индустрии красоты"
                                    href="/courses/upravlenie/menedzhment-v-industrii-krasoty/">Менеджмент в индустрии
                красоты</a></li>
              <li class="hidden"><a title="Управление в SMM" href="/courses/upravlenie/upravlenie-v-smm-upravlenie/">Управление
                в SMM</a></li>
              <li class="hidden"><a title="Управление продажами" href="/courses/upravlenie/upravlenie-prodazhami/">Управление
                продажами</a></li>
            </ul>

            <p class="toggle" data-shown="6" data-prev-text="Свернуть">Показать еще...</p>
          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/sozdanie-kontenta/">
                <img src="http://gde-online.ru/wp-content/uploads/2020/09/content-1-1.svg">
                <span>Создание контента</span>
              </a>
            </p>

            <ul>
              <li><a title="Копирайтинг"
                     href="/courses/sozdanie-kontenta/kopirajting-sozdanie-kontenta/">Копирайтинг</a>
              </li>
              <li><a title="Редактура текстов" href="/courses/sozdanie-kontenta/redaktura-tekstov/">Редактура
                текстов</a></li>
              <li><a title="Sound-дизайн и звукорежиссура"
                     href="/courses/sozdanie-kontenta/sound-dizajn-i-zvukorezhissura/">Sound-дизайн и
                звукорежиссура</a></li>
              <li><a title="Ableton Live" href="/courses/sozdanie-kontenta/ableton-live/">Ableton Live</a></li>
              <li><a title="Съемка и обработка фото" href="/courses/sozdanie-kontenta/semka-i-obrabotka-foto/">Съемка
                и обработка фото</a></li>
              <li><a title="Cinema 4D" href="/courses/sozdanie-kontenta/cinema-4d/">Cinema 4D</a></li>
            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/soft-skills/">
                <img src="">
                <span>Soft skills</span>
              </a>
            </p>

            <ul>
              <li><a title="Soft skills для менеджеров"
                     href="/courses/soft-skills/soft-skills-dlya-menedzherov/">Soft skills для менеджеров</a>
              </li>
            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/finansy/">
                <img src="">
                <span>Финансы</span>
              </a>
            </p>

            <ul>
              <li><a title="Финансы компании" href="/courses/finansy/finansy-kompanii/">Финансы компании</a>
              </li>
            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/biznes/">
                <img src="">
                <span>Бизнес-образование</span>
              </a>
            </p>

            <ul>
              <li><a title="Акселератор" href="/courses/biznes/akselerator/">Акселератор</a></li>
              <li><a title="MBA" href="/courses/biznes/mva/">MBA</a></li>
            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/fotografiya/">
                <img src="">
                <span>Фотография</span>
              </a>
            </p>

            <ul>
              <li><a title="Коммерческая съёмка" href="/courses/fotografiya/kommercheskaya-syomka/">Коммерческая
                съёмка</a></li>
            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/vysshee-obrazovanie/">
                <img src="">
                <span>Высшее образование</span>
              </a>
            </p>

            <ul>

            </ul>


          </div>
          <div class="group-holder">
            <p class="group-title">
              <a href="/courses/pedagogika/">
                <img src="">
                <span>Педагогика</span>
              </a>
            </p>

            <ul>
              <li><a title="Проектирование образовательного процесса"
                     href="/courses/pedagogika/proektirovanie-obrazovatelnogo-proczessa/">Проектирование
                образовательного процесса</a></li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isLoading: true,
    }
  },
  methods: {
    ...mapActions('courses-categories', ['getCategories']),
  },
  async created () {
    await this.getCategories()

    this.isLoading = false
  },
}
</script>

<style>
.middle-container {
  padding-top: 0;
  padding-left: 17px;
}

.edvlisting.listing-page {
  margin-top: 60px;
}

.edvlisting.listing-page h1 {
  padding-bottom: 40px;
  font-weight: 700;
  font-size: 32px;
  color: #333333;
}

</style>
