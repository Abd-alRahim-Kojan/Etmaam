import {
  Component,
  HostListener,
  NgZone,
  ViewEncapsulation,
} from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  SwiperOptions,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title: string = 'Etmaam';
  isMenuOpen: boolean = false;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };

  slidesData: { title: string; items: string[]; mainDivClasses: string }[] = [
    {
      title: 'ما قبل التأسيس',
      items: [
        'استمارة طلب ترخيص الاستثمار',
        'البيانات المالية للسنة السابقة',
        'نسخ جواز السفر للشركاء',
        'اثبات الهوية و اثبات العنوان للمدير و المعاونين',
        'نسخة مدققة للتفويض الكتابي',
      ],
      mainDivClasses:
        'mx-3 px-6 py-9 text-sky-800 shadow-md border border-sky-800',
    },
    {
      title: 'الوثائق المطلوبة لعملية الحجز',
      items: [
        'استمارة طلب ترخيص الاستثمار',
        'البيانات المالية للسنة السابقة',
        'نسخ جواز السفر للشركاء',
        'اثبات الهوية و اثبات العنوان للمدير و المعاونين',
        'نسخة مدققة للتفويض الكتابي',
      ],
      mainDivClasses: 'mx-3 px-6 py-10 text-sky-800 shadow-md',
    },
    {
      title: 'تأسيس النشاط',
      items: [
        'استمارة طلب ترخيص الاستثمار',
        'البيانات المالية للسنة السابقة',
        'نسخ جواز السفر للشركاء',
        'اثبات الهوية و اثبات العنوان للمدير و المعاونين',
        'نسخة مدققة للتفويض الكتابي',
      ],
      mainDivClasses: 'mx-3 px-6 py-10 text-sky-800 shadow-md',
    },
    {
      title: 'الوثائق المطلوبة للتأسيس',
      items: [
        'استمارة طلب ترخيص الاستثمار',
        'البيانات المالية للسنة السابقة',
        'نسخ جواز السفر للشركاء',
        'اثبات الهوية و اثبات العنوان للمدير و المعاونين',
        'نسخة مدققة للتفويض الكتابي',
      ],
      mainDivClasses: 'mx-3 px-6 py-10 text-sky-800 shadow-md',
    },
    {
      title: '',
      items: [],
      mainDivClasses: '',
    },
  ];

  links: string[] = [
    'أطلب خدمة',
    'من نحن؟',
    'الأسئلة الشائعة',
    'اتصل بنا',
    'انضم إلينا',
  ];

  servicesSlides: {
    classes: string;
    content: {
      imageSrc: string;
      imageAlt: string;
      title: string;
      description: string;
    };
  }[] = [
    {
      classes:
        'px-5 py-10 text-sky-900 shadow-lg max-w-96 min-h-96 border border-slate-100',
      content: {
        imageSrc: 'assets/svg/low.svg',
        imageAlt: 'low',
        title: 'الخدمات القانونية | الالتزام القانوني',
        description:
          'نحن نمتلك أفضل فريق قانوني في المملكة العربية السعودية مع سنوات من الخبرة والمعرفة، ونقدمها لك لتستفيد وتتمكن من رؤية السوق بمنظور مختلف.',
      },
    },
    {
      classes:
        'px-5 py-10 shadow-lg max-w-96 min-h-96 bg-gradient-to-b from-sky-600 to-blue-900 text-white',
      content: {
        imageSrc: 'assets/svg/note.svg',
        imageAlt: 'note',
        title: 'تصفية الشركة',
        description:
          'نحن في خدمتكم لتوفير حلول مبتكرة وسهلة التنفيذ التي تساعد على تحقيق نجاح شركتكم بكل يسر وسلاسة، دون مواجهة أي مشاكل أو عقبات.',
      },
    },
    {
      classes:
        'px-5 py-10 text-sky-900 shadow-lg max-w-96 min-h-96 border border-slate-100',
      content: {
        imageSrc: 'assets/svg/translate.svg',
        imageAlt: 'translate',
        title: 'خدمات الترجمة و تحسين التواصل',
        description:
          'نحن نقدم خدمات شاملة لتحسين التواصل ونساعدك على الحصول على أفضل صفقة وبناء علاقات ناجحة في مجال عملك.',
      },
    },
    {
      classes:
        'px-5 py-10 text-sky-900 shadow-lg max-w-96 min-h-96 border border-slate-100',
      content: {
        imageSrc: 'assets/svg/visa.svg',
        imageAlt: 'visa',
        title: 'الفيزا و التأشيرات في المملكة العربية السعودية',
        description:
          'نحن نقدم خدمات استشارية تساعدكم على اختيار التأشيرة الصحيحة ونقدم المساعدة في استخراجها بسهولة ويسر.',
      },
    },
    {
      classes:
        'px-5 py-10 text-sky-900 shadow-lg max-w-96 min-h-96 border border-slate-100',
      content: {
        imageSrc: 'assets/svg/taxes.svg',
        imageAlt: 'taxes',
        title: 'الزكاة و الضرائب و المعاملات المحاسبية',
        description:
          'المحاسبة والإدارة والتسويق هم الأعمدة الثلاثة الأساسية لأي عمل، ونحن نقدم خدمات متكاملة تغطي هذه الجوانب لتعزيز عملك.',
      },
    },
  ];

  offersItems: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }[] = [
    {
      imageSrc: 'assets/svg/planing.svg',
      imageAlt: 'planing',
      title: 'التخطيط',
      description: 'تحديد الخطوات اللازمة لتحقيق و الوصول للهدف المرجو.',
    },
    {
      imageSrc: 'assets/svg/bank.svg',
      imageAlt: 'bank',
      title: 'فتح حساب بنكي',
      description: 'للقيام بلعمليات المالية لاتمام اعمالك بشكل متكامل و سهل.',
    },
    {
      imageSrc: 'assets/svg/establishing.svg',
      imageAlt: 'establishing',
      title: 'التأسيس',
      description: 'تحديد الفكرة من خلال تحليل السوق ووضع خطة عمل.',
    },
    {
      imageSrc: 'assets/svg/tracking.svg',
      imageAlt: 'tracking',
      title: 'المتابعة و التحسين',
      description: 'تحديد الفكرة من خلال تحليل السوق ووضع خطة عمل.',
    },
  ];

  constructor(private ngZone: NgZone) {
    this.onResize();
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
