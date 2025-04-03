interface Coordinate {
  lat: number;
  lng: number;
}

interface ProjectDetails {
  area_size: string;
  residence: string;
  employment: string;
}

export interface Project {
  id: number;
  slug: string;
  image: string;
  time_frame: string;
  status: string;
  name: string;
  under_name: string;
  title: string;
  description: string;
  details: ProjectDetails[];
  progress_description: string;
  coordinates: Coordinate[];
  center: Coordinate;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "צפון-הרצליה",
    image: "/images/herzliya.jpg",
    time_frame: "medium",
    status: `לקראת ותמ"ל`,
    name: "צפון הרצליה",
    under_name: `תוכנית פיתוח מקיפה המשלבת 12,000 יחידות דיור,
                  875,000 מ״ר תעסוקה ומסחר, ופארק מטרופוליני בצפון העיר הרצליה.`,
    title: "פרויקט הרצליה צפון - המתחם החדש",
    description: `פרויקט "הרצליה צפון" מהווה את אחת התוכניות המשמעותיות ביותר 
                      לפיתוח העיר הרצליה בשנים האחרונות. התוכנית, המשתרעת 
                      על שטח של כ-1,500 דונם בצפון העיר, צפויה להביא
                      לשינוי משמעותי באזור ולהפוך אותו למוקד עירוני חדש ותוסס.`,
    details: [
      {
        area_size: "1750",
        residence: "18,500",
        employment: "1000",
      },
    ],
    progress_description: `הפרויקט נמצא כעת בשלב מתקדם של תכנון, לקראת כניסה למסלול ותמ"ל
                              (הוועדה לתכנון מתחמים מועדפים לדיור).
                              מסלול זה צפוי להאיץ משמעותית את תהליכי התכנון והאישור של הפרויקט.
                              התוכנית המפורטת כוללת תכנון מוקפד של מערך התנועה, תשתיות מתקדמות, 
                              ושילוב מיטבי בין אזורי המגורים, התעסוקה והפנאי.
                              דגש מיוחד ניתן לתכנון בר-קיימא ולשמירה על איכות החיים של התושבים העתידיים.`,
    coordinates: [
      { lat: 32.179425, lng: 34.850397 },
      { lat: 32.180442, lng: 34.841986 },
      { lat: 32.17908, lng: 34.826622 },
      { lat: 32.191792, lng: 34.832759 },
    ],
    center: { lat: 32.184674, lng: 34.836192 },
  },
  {
    id: 2,
    slug: "test",
    image: "/images/",
    time_frame: "short",
    status: `test`,
    name: "test",
    under_name: `test`,
    title: "פרויקט הרצליה צפון - המתחם החדש",
    description: `פרויקט "הרצליה צפון" מהווה את אחת התוכניות המשמעותיות ביותר 
                      לפיתוח העיר הרצליה בשנים האחרונות. התוכנית, המשתרעת 
                      על שטח של כ-1,500 דונם בצפון העיר, צפויה להביא
                      לשינוי משמעותי באזור ולהפוך אותו למוקד עירוני חדש ותוסס.`,
    details: [
      {
        area_size: "1750",
        residence: "18,500",
        employment: "1000",
      },
    ],
    progress_description: `הפרויקט נמצא כעת בשלב מתקדם של תכנון, לקראת כניסה למסלול ותמ"ל
                              (הוועדה לתכנון מתחמים מועדפים לדיור).
                              מסלול זה צפוי להאיץ משמעותית את תהליכי התכנון והאישור של הפרויקט.
                              התוכנית המפורטת כוללת תכנון מוקפד של מערך התנועה, תשתיות מתקדמות, 
                              ושילוב מיטבי בין אזורי המגורים, התעסוקה והפנאי.
                              דגש מיוחד ניתן לתכנון בר-קיימא ולשמירה על איכות החיים של התושבים העתידיים.`,
    coordinates: [
      { lat: 32.179425, lng: 34.850397 },
      { lat: 32.180442, lng: 34.841986 },
      { lat: 32.17908, lng: 34.826622 },
      { lat: 32.191792, lng: 34.832759 },
    ],
    center: { lat: 32.184674, lng: 34.836192 },
  },
];

export default projects;
