import { Wish } from "@/models/home/guestbook";

export async function fetchGuestbookData(): Promise<Wish[]> {
  return [
    {
      id: 1,
      userImage: "https://i.pravatar.cc",
      userName: "ธนพล วิริยะกิจ",
      date: "10/02/2567",
      time: "14:30",
      message: "ขอให้มีความสุขมากๆ และสมหวังในทุกสิ่งที่ตั้งใจนะครับ!",
      images: [
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 2,
      userImage: "https://i.pravatar.cc",
      userName: "ณัฐวุฒิ สินทรัพย์",
      date: "10/02/2567",
      time: "15:45",
      message: "ขอให้ชีวิตคู่มีแต่ความรักและความเข้าใจกันตลอดไป ❤️",
      images: [
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 3,
      userImage: "https://i.pravatar.cc",
      userName: "ศิริพร มงคลชัย",
      date: "11/02/2567",
      time: "09:00",
      message:
        "สุขสันต์วันสำคัญ ขอให้ทุกวันเต็มไปด้วยความสุข และเสียงหัวเราะ 🎉",
      images: [
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 4,
      userImage: "https://i.pravatar.cc",
      userName: "วรากร วัฒนชัย",
      date: "11/02/2567",
      time: "10:15",
      message: "ขอให้ครอบครัวอบอุ่น เต็มไปด้วยความรักเสมอนะครับ 🥰",
      //   image: null,
    },
    {
      id: 5,
      userImage: "https://i.pravatar.cc",
      userName: "กชกร เพชรรัตน์",
      date: "11/02/2567",
      time: "11:50",
      message:
        "ขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิตขอให้รักกันตลอดไป และมีแต่สิ่งดีๆ เข้ามาในชีวิต 🎊",
      images: [
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];
}
