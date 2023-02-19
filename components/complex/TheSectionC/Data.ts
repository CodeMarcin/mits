import { IHeaderProps } from "~~/components/parts/Header/Header.vue";
import { HEADER_LABELS } from "./Labels";

import Carousel1 from "~/assets/svg/Carousel1.svg";
import Carousel2 from "~/assets/svg/Carousel2.svg";
import Carousel3 from "~/assets/svg/Carousel3.svg";
import Carousel4 from "~/assets/svg/Carousel4.svg";
import Carousel5 from "~/assets/svg/Carousel5.svg";

// import Carousel1 from `~/assets/svg/Carousel1.svg`;
// import Carousel2 from `~/assets/svg/Carousel2.svg`;
// import Carousel3 from `~/assets/svg/Carousel3.svg`;
// import Carousel4 from `~/assets/svg/Carousel4.svg`;
// import Carousel5 from `~/assets/svg/Carousel5.svg`;
import { ICarouselProps } from "~~/components/parts/Carousel/Carousel.vue";

export const OBJECT__HEADER: IHeaderProps = {
  title: HEADER_LABELS.SECTION_C_SUBTITLE,
  subTitle: HEADER_LABELS.SECTION_C_SUBTITLE,
  description: HEADER_LABELS.SECTION_C_DESCTRIPTION,
};

export const ARRAY__CAROUSEL: ICarouselProps = {
  slides: [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5],
};
