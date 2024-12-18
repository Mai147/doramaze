import { QuestionPosition } from "../configs/board";
import { Answer, AnswerKeyValue } from "../types";

export enum QuestionLevel {
  EASY = "EASY",
  NORMAL = "NORMAL",
  MIDDLE = "MIDDLE",
  HARD = "HARD",
  SUPER_HARD = "SUPER_HARD",
}

export type Question = {
  image?: string;
  question: string;
  answers: Answer[];
  correctAnswer: AnswerKeyValue;
  level: QuestionLevel;
  position: {
    row: number;
    col: number;
  };
};

export const QuestionData: Question[] = [
  {
    question:
      "Ai là người có công lớn trong việc thống nhất Nhật Bản, chấm dứt thời kỳ chiến loạn kéo dài trên khắp cả nước Nhật bản?",
    answers: [
      {
        content: "Oda Nobunaga",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Sengoku",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Susanoo",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Toyotomi Hideyoshi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.EASY,
    position: QuestionPosition[0],
  },
  {
    question: "Đây là trang phục gì?",
    image: "images/questions/q1.jpg",
    answers: [
      {
        content: "Yukata",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Kimono",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Furisode",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Houmongi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[1],
  },
  {
    question: "Trong nghệ thuật trà đạo Nhật Bản, bốn nguyên tắc cơ bản là gì?",
    image: "images/questions/q2.jpg",
    answers: [
      {
        content: "Hòa, Kính, Thanh, Tịnh",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Tĩnh, Trang, Kỳ, Giản",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Hòa, Tịnh, Thực, An",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Kính, Trường, Chính, Tịch",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.HARD,
    position: QuestionPosition[2],
  },
  {
    question: "Nhật Bản nằm ở vị trí nào trên bản đồ thế giới?",
    image: "images/questions/q3.jpg",
    answers: [
      {
        content: "Tây Á",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Nam Á",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Đông Á",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Trung Á",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[3],
  },
  {
    question: "Vị thần tối cao trong thần thoại nhật bản là ai?",
    image: "images/questions/q4.jpg",
    answers: [
      {
        content: "Amaterasu",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Susanoo",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Ame-no-uzume",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Fujin",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.HARD,
    position: QuestionPosition[4],
  },
  {
    question:
      "Đạo Shinto (Thần đạo) là tôn giáo bản địa của Nhật Bản. Trong Thần đạo, cổng Torii có ý nghĩa gì?",
    image: "images/questions/q5.jpg",
    answers: [
      {
        content: "Biểu tượng cho sự trường tồn",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Ranh giới giữa thế giới phàm tục và thần linh",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Lối vào đền chùa dành cho các vị thần",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nơi cầu nguyện cho người quá cố",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.EASY,
    position: QuestionPosition[5],
  },
  {
    question: "Đâu là hòn đảo lớn nhất trong 4 hòn đảo chính của Nhật Bản?",
    answers: [
      {
        content: "Honshu",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Hokkaido",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Kyushu",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Shikoku",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.HARD,
    position: QuestionPosition[6],
  },
  {
    question:
      "Món ăn nào là món ăn truyền thống nổi tiếng của Nhật Bản, được làm từ gạo và hải sản sống?",
    answers: [
      {
        content: "Sushi",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Ramen",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Tempura",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Sashimi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[7],
  },
  {
    question: "Ở Nhật Bản người trên bức hình này có chức vị:",
    image: "images/questions/q6.jpg",
    answers: [
      {
        content: "Thương gia",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Quý tộc",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Tướng quân",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Thiên Hoàng",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.D,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[8],
  },
  {
    question:
      "Minh Trị Duy Tân (1868 - 1912) đã thay đổi Nhật Bản ra sao về chính trị và công nghiệp hóa?",
    image: "images/questions/q7.jpg",
    answers: [
      {
        content:
          "Chuyển đổi từ chế độ phong kiến sang chính phủ hiện đại, phát triển công nghiệp hóa, quân đội và giao thương với phương Tây.",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content:
          "Giữ nguyên chế độ phong kiến, tập trung vào nông nghiệp và hạn chế giao thương với phương Tây.",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content:
          "Tăng cường quyền lực cho tầng lớp võ sĩ đạo và phát triển nông nghiệp truyền thống.",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content:
          "Phát triển kinh tế dựa trên thương mại nội địa và duy trì chính sách đóng cửa với các nước phương Tây.",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.SUPER_HARD,
    position: QuestionPosition[9],
  },
  {
    question:
      'Sự kiện "Sengoku Jidai" (Chiến Quốc Thời Đại) kéo dài bao lâu, và ai là người kết thúc thời kỳ này?',
    image: "images/questions/q8.jpg",
    answers: [
      {
        content: "Kéo dài khoảng 100 năm, kết thúc bởi Toyotomi Hideyoshi",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Kéo dài khoảng 150 năm, kết thúc bởi Tokugawa Ieyasu",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Kéo dài khoảng 200 năm, kết thúc bởi Oda Nobunaga",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Kéo dài khoảng 50 năm, kết thúc bởi Takeda Shingen",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.SUPER_HARD,
    position: QuestionPosition[10],
  },
  {
    question: "Hệ thống chữ viết của Nhật Bản gồm những loại chữ nào?",
    answers: [
      {
        content: "Furigana và Hangul",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Nihongo và Romaji",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Kana, Latinh, Furigana",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Kanji, hiragana, katakana",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.D,
    level: QuestionLevel.EASY,
    position: QuestionPosition[11],
  },
  {
    question:
      "Người đề ra các cuộc cái cách, đổi mới đưa nhật bản từ một nước lạc hậu trờ thành cường quốc trong thế chiến thứ 2 là ai?",
    answers: [
      {
        content: "Thiên hoàng minh trị",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Thiên hoàng khâm minh",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Thiên hoàng thần vũ",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Thiên hoàng dụng minh thiên hoàng",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[12],
  },
  {
    question: "Tên của chuyến tàu cao tốc nổi tiếng của Nhật Bản là gì?",
    answers: [
      {
        content: "Hikari",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Kodama",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Shinkansen",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nozomi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.EASY,
    position: QuestionPosition[13],
  },
  {
    question:
      'Tên "Doraemon" được ghép bởi 2 từ dora và emon. Vậy chúng có ý nghĩa gì?',
    image: "images/questions/q9.jpg",
    answers: [
      {
        content:
          '"Dora" từ "dora" trong tiếng Nhật có nghĩa là "mèo máy", còn "Emon" là phần mở rộng của tên người.',
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content:
          '"Dora" từ "nora neko" (mèo hoang), và "Emon" là cách gọi cổ, có nghĩa là "con mèo đi lạc".',
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content:
          '"Dora" là từ viết tắt của "dorama" (phim truyền hình), còn "Emon" là một từ để chỉ loài động vật kỳ lạ.',
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content:
          '"Dora" là từ "mèo", và "Emon" ám chỉ "người đến từ tương lai"',
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[14],
  },
  {
    question: "Tên gọi chính thức của quốc kỳ Nhật Bản là gì?",
    image: "images/questions/q10.jpg",
    answers: [
      {
        content: "Hinomaru hoặc Nisshoki",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Nihonki hoặc Asahimaru",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Yamato hoặc Tairikimaru",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Sakura hoặc Fuji",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[15],
  },
  {
    question:
      "Thành Himeji, một trong những lâu đài nổi tiếng nhất Nhật Bản, còn được gọi là gì?",
    image: "images/questions/q11.jpg",
    answers: [
      {
        content: "Lâu đài Mèo Trắng",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Lâu đài Hạc Trắng",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Lâu đài Bạch Phượng ",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Lâu đài Bạch Long",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[16],
  },
  {
    question: "Đơn vị tiền tệ chính thức của Nhật Bản là gì?",
    answers: [
      {
        content: "Won",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Yên",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Baht",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nhân dân tệ",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.EASY,
    position: QuestionPosition[17],
  },
  {
    question: "Lễ hội hoa anh đào thường diễn ra vào khoảng thời gian nào?",
    image: "images/questions/q12.jpg",
    answers: [
      {
        content: "Từ tháng 12-tháng 2",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Từ tháng 3-tháng 5",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Từ tháng 7-tháng 9",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Từ tháng 9-tháng 11",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.HARD,
    position: QuestionPosition[18],
  },
  {
    question:
      "Nhật Bản có tỷ lệ dân số già cao nhất thế giới. Khoảng bao nhiêu phần trăm dân số Nhật Bản trên 65 tuổi?",
    answers: [
      {
        content: "15%",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "20%",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "30%",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "35%",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[19],
  },
];
