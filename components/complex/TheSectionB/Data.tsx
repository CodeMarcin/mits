import Downloads from "~/assets/svg/Downloads.svg";
import Heart from "~/assets/svg/Heart.svg";
import ActiveUser from "~/assets/svg/ActiveUser.svg";
import Reviews from "~/assets/svg/Reviews.svg";

import { ANIMATED_COUNT_LABELS } from "./Labels";

export const ARRAY__ANIMATED_COUNT = [
  {
    icon: <Downloads />,
    endCount: 25,
    suffix: "K+",
    description: ANIMATED_COUNT_LABELS.ANIMATED_COUNT_FIRST_DESCRIPTION,
  },
  {
    icon: <Heart />,
    endCount: 1200,
    suffix: "+",
    description: ANIMATED_COUNT_LABELS.ANIMATED_COUNT_SECOND_DESCRIPTION,
  },
  {
    icon: <ActiveUser />,
    endCount: 14,
    suffix: "K+",
    description: ANIMATED_COUNT_LABELS.ANIMATED_COUNT_THIRD_DESCRIPTION,
  },
  {
    icon: <Reviews />,
    endCount: 3500,
    suffix: "+",
    description: ANIMATED_COUNT_LABELS.ANIMATED_COUNT_FOURTH_DESCRIPTION,
  },
];
