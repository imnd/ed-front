<template>
  <div class="front-page">
    <div class="container">
      <div class="front-header">
        <h1>Мы анализируем весь рынок онлайн-образования, чтобы подсказать самое <span>лучшее</span></h1>
        <h3>Мы собрали все онлайн-курсы по digital и IT профессиям. Читайте отзывы о школах, сравнивайте и
          выбирайте то, что подходит именно вам!</h3>
      </div>
      <div class="front-category">
        <div
          v-for="(category, index) in topCategories"
          :key="category.id"
          :class="`front-category__item front-category__item-color-${index + 1}`"
        >
          <a :href="`/courses-categories/${category.slug}/`">
            <span class="sub-title">Топ 10 курсов</span>
            <span class="title">{{ category.title }}</span>
            <span class="icon">
              <img :src="`${category.icon}`">
            </span>
          </a>
        </div>
      </div>
      <div class="edvlisting">
        <CoursesList path="/" />
      </div>
    </div>
    <div class="stock">
      <div class="container">
        <h2>Акции школ</h2>
        <div class="scroll-nav">
          <ul class="nav nav-tabs">
            <li><a class="active show" href="#tab-1" data-toggle="tab">Все</a></li>
            <li
              v-for="sale in sales"
              :key="sale.id"
            >
              <a href="#tab-2" data-toggle="tab">{{ sale.title }}</a>
            </li>
            <!--<li><a href="#tab-2" data-toggle="tab">Дизайн</a></li>
            <li><a href="#tab-3" data-toggle="tab">Маркетинг</a></li>
            <li><a href="#tab-4" data-toggle="tab">Программирование</a></li>
            <li><a href="#tab-5" data-toggle="tab">Управление</a></li>
            <li><a href="#tab-6" data-toggle="tab">Создание контента</a></li>
            <li><a href="#tab-7" data-toggle="tab">Иностранные языки</a></li>-->
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide00">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide01">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide02">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide03">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide04">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide05">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide06">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide07">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control06" aria-controls="slick-slide06"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control07" aria-controls="slick-slide07"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane" id="tab-2" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider">
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-3" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide20">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide21">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide22">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide23">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide24">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide25">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide26">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide27">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control23" aria-controls="slick-slide23"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control24" aria-controls="slick-slide24"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control25" aria-controls="slick-slide25"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control26" aria-controls="slick-slide26"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control27" aria-controls="slick-slide27"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane" id="tab-4" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide30">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide31">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide32">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide33">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide34">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide35">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide36">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide37">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control30" aria-controls="slick-slide30"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control31" aria-controls="slick-slide31"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control32" aria-controls="slick-slide32"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control33" aria-controls="slick-slide33"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control34" aria-controls="slick-slide34"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control35" aria-controls="slick-slide35"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control36" aria-controls="slick-slide36"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control37" aria-controls="slick-slide37"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane" id="tab-5" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide40">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide41">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide42">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide43">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide44">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide45">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide46">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide47">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control40" aria-controls="slick-slide40"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control41" aria-controls="slick-slide41"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control42" aria-controls="slick-slide42"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control43" aria-controls="slick-slide43"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control44" aria-controls="slick-slide44"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control45" aria-controls="slick-slide45"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control46" aria-controls="slick-slide46"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control47" aria-controls="slick-slide47"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane" id="tab-6" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide50">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide51">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide52">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide53">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide54">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide55">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide56">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide57">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control51" aria-controls="slick-slide51"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control52" aria-controls="slick-slide52"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control53" aria-controls="slick-slide53"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control54" aria-controls="slick-slide54"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control55" aria-controls="slick-slide55"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control56" aria-controls="slick-slide56"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control57" aria-controls="slick-slide57"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-pane" id="tab-7" role="tabpanel">
            <div class="slider-tab slick-initialized slick-slider slick-dotted">
              <button type="button" class="slick-prev slick-arrow" style="">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90872 8L12 12.978L10.5456 14.4L4 8L10.5456 1.6L12 3.02199L6.90872 8Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 0px; transform: translate3d(0px, 0px, 0px);">
                  <div class="slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                       style="width: 0px;" role="tabpanel" id="slick-slide60">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide61">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide62">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 0px;"
                       role="tabpanel" id="slick-slide63">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide64">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="5" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide65">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="6" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide66">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide" data-slick-index="7" aria-hidden="true" style="width: 0px;" tabindex="-1"
                       role="tabpanel" id="slick-slide67">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-1.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="13" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="14" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slick-slide slick-cloned" data-slick-index="15" aria-hidden="true" style="width: 0px;"
                       tabindex="-1">
                    <div>
                      <div class="item" style="width: 100%; display: inline-block;">
                        <div class="top">
                          <div class="img"><img src="~/assets/images/logo-2.svg" alt=""></div>
                          <div class="sale">-40%</div>
                        </div>
                        <div class="title">Big Data Engineer</div>
                        <div class="price">
                          <div class="old">165 000 ₽/курс</div>
                          <div class="new">99 000 ₽/курс</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="slick-next slick-arrow" style="">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.09128 7L0 2.02199L1.45436 0.599996L8 7L1.45436 13.4L0 11.978L5.09128 7Z"
                        fill="#B8B8B8"></path>
                </svg>
              </button>
              <ul class="slick-dots" style="" role="tablist">
                <li class="slick-active" role="presentation">
                  <button type="button" role="tab" id="slick-slide-control60" aria-controls="slick-slide60"
                          aria-label="1 of 2" tabindex="0" aria-selected="true">1
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control61" aria-controls="slick-slide61"
                          aria-label="2 of 2" tabindex="-1">2
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control62" aria-controls="slick-slide62"
                          aria-label="3 of 2" tabindex="-1">3
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control63" aria-controls="slick-slide63"
                          aria-label="4 of 2" tabindex="-1">4
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control64" aria-controls="slick-slide64"
                          aria-label="5 of 2" tabindex="-1">5
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control65" aria-controls="slick-slide65"
                          aria-label="6 of 2" tabindex="-1">6
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control66" aria-controls="slick-slide66"
                          aria-label="7 of 2" tabindex="-1">7
                  </button>
                </li>
                <li role="presentation">
                  <button type="button" role="tab" id="slick-slide-control67" aria-controls="slick-slide67"
                          aria-label="8 of 2" tabindex="-1">8
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#" class="btn-outline">Смотреть все акции</a>
        </div>
      </div>
    </div>
    <div class="review">
      <div class="container">
        <h2>Новые отзывы о школах</h2>
        <div id="reviews-slider">
          <div class="reviews-slider">
            <div class="reviews-slider__control reviews-slider__control_left">
              <button class="reviews-slider__control-button reviews-slider__control-button_left">
                <svg>
                  <path d="M2.90872 6.99997L8 11.978L6.54564 13.4L0 6.99997L6.54564 0.599976L8 2.02197L2.90872 6.99997Z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="reviews-slider__list-wrapper">
              <ul class="reviews-slider__list">
                <li
                  v-for="(review, index) in lastReviews"
                  :key="review.id"
                  class="reviews-slider__list-item"
                >
                  <div class="reviews-slider-item">
                    <header class="reviews-slider-item__header">
                      <div class="reviews-slider-item__username-date-block">
                        <div class="reviews-slider-item__username">{{ review.userFullName }}</div>
                        <div class="reviews-slider-item__date">{{ formatDate(review.createdAt) }}</div>
                      </div>
                    </header>
                    <section class="reviews-slider-item__courseName-rating-schoolLogo-section">
                      <div class="reviews-slider-item__courseName-rating-block">
                        <div class="reviews-slider-item__courseName">{{ review.title }}</div>
                        <div class="reviews-slider-item__rating">
                          <svg
                            v-for="index in 5"
                            :key="index"
                            :class="`reviews-slider-item__rating-icon ${review.rating < index ? 'reviews-slider-item__rating-icon_negative' : ''}`">
                            <path
                              d="M8.0002 12.1666L3.10186 15.1583L4.43353 9.57498L0.0751953 5.84165L5.79603 5.38331L8.0002 0.083313L10.2044 5.38331L15.926 5.84165L11.5669 9.57498L12.8985 15.1583L8.0002 12.1666Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <img :src="`${review.school.logo}`"
                           class="reviews-slider-item__schoolLogo" />
                    </section>
                    <section class="reviews-slider-item__body">
                      {{ review.text }}
                    </section>
                    <footer class="reviews-slider-item__footer">
                      <button class="reviews-slider-item__button-show-full">Читать полностью
                        <svg width="12" height="8" viewBox="0 0 12 8" class="reviews-slider-item__button-show-full-icon"
                        >
                          <path
                            d="M5.99962 4.97669L10.1246 0.851685L11.303 2.03002L5.99962 7.33335L0.696289 2.03002L1.87462 0.851685L5.99962 4.97669Z"
                            fill="#9B5DE5"></path>
                        </svg>
                      </button>
                    </footer>
                  </div>
                </li>
              </ul>
            </div>
            <div class="reviews-slider__control reviews-slider__control_right">
              <button class="reviews-slider__control-button reviews-slider__control-button_right">
                <svg>
                  <path d="M5.09128 6.99997L0 2.02197L1.45436 0.599976L8 6.99997L1.45436 13.4L0 11.978L5.09128 6.99997Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-seo">
      <div class="container">
        <h2>О проекте</h2>
        <p>Среди большого выбора программ обучения по digital и IT профессиям от многочисленных онлайн-школ стало трудно
          ориентироваться. Курсы различаются по продолжительности, типу и стоимости оплаты, программе курса и качеству
          материала.</p>
        <p>Мы создали сайт edvisor.ru для удобного сравнения онлайн-курсов между собой. Читайте отзывы о школах от
          реальных студентов, следите за акциями, сравнивайте и выбирайте онлайн-курсы, которые подходят именно вам!</p>
        <p>Все программы, которые Вы пометите как "Интересные" будут доступны в личном кабинете, во вкладке "Избранное".
          Это позволит Вам следить за появлением скидок на онлайн-курсы только по интересующим вас программам
          обучения.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import { mapActions, mapGetters, mapState } from 'vuex'
import DateTime from '@/mixins/DateTime'
import CoursesList from '@/components/courses/CoursesList'

export default Vue.extend({
  head: {
    title: 'Edvisor — Все онлайн курсы по Digital и IT профессиям'
  },
  components: { CoursesList },
  mixins: [DateTime],
  data () {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapState('courses-categories', ['topCategories']),
    ...mapState('courses', ['courses', 'coursesCount']),
    ...mapState('sales', ['sales']),
    ...mapState('school-reviews', ['lastReviews']),
  },
  methods: {
    ...mapActions('courses-categories', ['getTopCategories']),
    ...mapActions('sales', ['getSales']),
    ...mapActions('school-reviews', ['getLastReviews']),
  },
  async created () {
    await this.getTopCategories()
    await this.getSales()
    await this.getLastReviews()

    this.isLoading = false
  },
})
</script>

<style scoped lang="scss">
.courses-page {
  &__content {
    margin-bottom: 32px;
  }

  &__courses-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 32px;
  }

  &__footer {
    text-align: center;
  }

  &__courses-count-info {
    color: #757575;
    margin-bottom: 20px;
  }

  &__button-show-more {
    background: #fff;
    border: 1px solid #9b5de5;
    box-sizing: border-box;
    border-radius: 100px;
    padding: 17px 32px;
    font-weight: 800;
    font-size: 18px;
    line-height: 120%;
    color: #9b5de5;
    width: 100%;
    cursor: pointer;
    transition: .25s ease-in-out;
    outline: none;
  }

  @media (min-width: 768px) {
    &__button-show-more {
      width: auto;
    }
  }
}

.front-category__item .icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 120px;
  right: 24px;
}

.stock {
  padding-top: 88px;
  padding-bottom: 88px;
  overflow: hidden;
}

.stock {
  display: none;
}

.review {
  margin-top: 80px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1270px;
  }
}

h2 {
  margin-bottom: 40px;
  line-height: 120%;
  font-size: 40px;
  font-weight: 800;
}

.rewiew h2 {
  margin-bottom: 25px;
}

.reviews-slider {
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
}

@media (min-width: 768px) {
  .reviews-slider {
    grid-column-gap: 20px;
    grid-template-columns: 40px 1fr 40px;
    grid-row-gap: 0;
  }
}

.reviews-slider__control {
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.reviews-slider__control_left {
  grid-row-start: 2;
  grid-column: 1/2;
  margin-left: auto;
  margin-right: 5px;
}

@media (min-width: 768px) {
  .reviews-slider__control_left {
    grid-row-start: 1;
    grid-column: 1/2;
    margin: 0;
  }
}

.reviews-slider__list-wrapper {
  overflow: hidden;
  grid-column: 1/3;
}

@media (min-width: 768px) {
  .reviews-slider__list-wrapper {
    overflow: hidden;
    grid-column: 2/3;
  }
}

.reviews-slider__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(6, 100%);
  transition: .25s ease-in-out;
}

@media (min-width: 768px) {
  .reviews-slider__list {
    grid-template-columns: repeat(6, 50%);
  }
}

.reviews-slider__list-item {
  padding: 4px;
  box-sizing: border-box;
  margin: 0 8px;
}

.reviews-slider-item {
  padding: 16px;
  color: #333;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 20px rgb(0 0 0 / 10%);
  border-radius: 8px;
}

.reviews-slider-item__header {
  display: flex;
  flex-direction: row;
  margin-bottom: 18px;
}

.reviews-slider-item__username {
  font-weight: 800;
}

.reviews-slider-item__date {
  font-size: 14px;
  line-height: 140%;
  color: #b8b8b8;
}

.reviews-slider-item__courseName-rating-schoolLogo-section {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.reviews-slider-item__courseName-rating-block {
  margin-right: 22px;
}

.reviews-slider-item__courseName {
  font-weight: 800;
  margin-bottom: 9px;
}

.reviews-slider-item__rating-icon {
  margin-right: 4.15px;
  width: 16px;
  height: 16px;
  fill: #fee440;
}

.reviews-slider-item__rating-icon_negative {
  fill: #b8b8b8;
}

.reviews-slider-item__rating-icon:last-child {
  margin-right: 0;
}

.reviews-slider-item__schoolLogo {
  height: 24px;
  max-width: 60px;
}

.reviews-slider-item__body {
  font-size: 14px;
  line-height: 140%;
  margin-bottom: 20px;
}

.reviews-slider-item__footer {
  display: flex;
  flex-direction: row;
  margin-top: auto;
  background-color: #fff;
  padding: 0;
}

.reviews-slider-item__button-show-full {
  margin-left: auto;
  padding-right: 4.7px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #9b5de5;
  font-size: 14px;
  line-height: 140%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

.reviews-slider-item__button-show-full-icon {
  margin-left: 12.7px;
  transition: .25s ease-in-out;
}

.reviews-slider__control {
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.reviews-slider__control_right {
  grid-row-start: 2;
  margin-left: 5px;
}

@media (min-width: 768px) {
  .reviews-slider__control_right {
    grid-row-start: 1;
    grid-column: 3/4;
    margin: 0;
  }
}

.reviews-slider__control-button {
  min-width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #fff;
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
  cursor: pointer;
  transition: .25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.reviews-slider__control-button svg {
  width: 8px;
  height: 14px;
  fill: #b8b8b8;
  transition: .25s ease;
}

.block-seo {
  padding-top: 110px;
}

.block-seo h2 {
  margin-bottom: 26px;
}

.block-seo p {
  margin-bottom: 49px;
  font-size: 16px;
  line-height: 150%;
  color: #757575;
  font-weight: 500;
}

svg:not(:root) {
  overflow: hidden;
}

path {
  transition: all 0.4s;
}
</style>
