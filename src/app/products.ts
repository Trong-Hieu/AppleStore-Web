export const products = [
    {
      id: 0,
      type: "iPhone",
      name: "iPhone 7 Plus",
      price: 449.99,
      image: "assets/Images/iphone-7-plus-black-600x600.jpg",
      description: "iPhone 7 Plus features dual 12.0MP cameras for high-resolution zoom and an ƒ/1.8 aperture for great low-light photos and 4K video. Optical image stabilization. A 5.5-inch Retina HD display with wide color and 3D Touch. An A10 Fusion chip for up to 2x faster performance than iPhone 6. Touch ID. Faster LTE. The longest battery life in an iPhone. Immersive stereo sound, splash- and water-resistant design, and iOS 13."
    },
    {
      id: 1,
      type: "iPhone",
      name: "iPhone 8 Plus",
      price: 599.99,
      image: "assets/Images/iphone-8-plus-hh-600x600.jpg",
      description: "iPhone 8 is a new generation of iPhone. Designed with most durable glass and a stronger aerospace-grade aluminum band. Charges wirelessly.¹ Resists water and dust.² 5.5-inch Retina HD display with True Tone.³ 12MP dual cameras offer improved Portrait mode and new Portrait Lighting.⁴ Powered by A11 Bionic, a most powerful smartphone chip. Supports augmented reality experiences in games and apps. With iPhone 8 Plus, intelligence has never looked better."
    },
    {
      id: 2,
      type: "iPhone",
      name: "iPhone X",
      price: 899.99,
      image: "assets/Images/iphone-x-64gb-hh-600x600.jpg",
      description: "Watch and share engaging mobile content with this iPhone X smartphone for Simple Mobile. It has a 5.8-inch Super Retina OLED display for brilliant viewing, and the dual 12-megapixel cameras let you record 4K videos. Take creative, flattering selfies with the TrueDepth front camera of this 64GB iPhone X smartphone."
    },
    {
      id: 3,
      type: "iPhone",
      name: "iPhone XR",
      price: 749.99,
      image: "assets/Images/iphone-xr-128gb-600x600.jpg",
      description: "iPhone XR features the most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy and an innovative backlight design that allows the screen to stretch into the corners¹. Six stunning new finishes. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP camera system with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance². And iOS 12 - the most advanced mobile operating system in the world - with powerful new tools that make iPhone more personal than ever."
    },
    {
      id: 4,
      type: "iPhone",
      name: "iPhone XS",
      price: 999.99,
      image: "assets/Images/iphone-xs-gold-600x600.jpg",
      description: "Make and receive calls with this iPhone XS smartphone. An A10 Bionic chip ensures the smooth running of programs and apps, while the 64GB of memory provide ample storage space for data. This iPhone XS smartphone features a 5.8-inch touchscreen for easy operation and entertainment plus 12MP and 7MP cameras for taking quality videos and photos."
    },
    {
      id: 5,
      type: "iPhone",
      name: "iPhone XS Max",
      price: 1099.99,
      image: "assets/Images/iphone-xs-max-256gb-white-600x600.jpg",
      description: "Stay connected with this Total Wireless iPhone XS Max smartphone. An A12 Bionic chip ensures flawless completion of processes, while the 64GB memory provides enough storage for data. This Total Wireless iPhone XS Max features a 12MP rear camera and 7MP front camera for quality recording and photo capture plus a built-in rechargeable lithium-ion battery with up to 25-hours of talk time."
    },
    {
      id: 6,
      type: "iPhone",
      name: "iPhone 11",
      price: 849.99,
      image: "assets/Images/iphone-11-red-600x600.jpg",
      description: "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.³ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.² And worry less with water resistance up to 2 meters for 30 minutes."
    },
    {
      id: 7,
      type: "iPhone",
      name: "iPhone 11 Pro",
      price: 1349.99,
      image: "assets/Images/iphone-11-pro-256gb-black-600x600.jpg",
      description: "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the Super Retina XDR display—the brightest iPhone display yet. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life¹ and a new level of water resistance.² All in the first iPhone powerful enough to be called Pro."
    },
    {
      id: 8,
      type: "iPhone",
      name: "iPhone 11 Pro Max",
      price: 1449.99,
      image: "assets/Images/iphone-11-pro-max-512gb-gold-600x600.jpg",
      description: "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display – the brightest iPhone display yet.¹ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life² and a new level of water resistance.³ All in the first iPhone powerful enough to be called Pro."
    },
    {
      id: 9,
      type: "iPad",
      name: "iPad Pro",
      price: 1409.99,
      image: "assets/Images/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-600x600.jpg",
      description: "Immensely powerful, portable, and capable, the 12.9-inch iPad Pro features a redesigned Retina display that is the most advanced on the planet, while the A10X Fusion chip delivers more power than most PC laptops. ¹ With Apple Pencil, the Smart Keyboard, and iOS—the most advanced mobile operating system—iPad Pro is designed for the world we live in today. "
    }
]
// export interface Product {
//   $key: string;
//   category: string;
//   imageUrl: string;
//   price: number;
//   title: string;
//   description: string;
// }
export class Product{
  [x: string] : any;
  id: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
  constructor(
    id: string,
    title: string,
    price: number,
    category: string,
    desciption: string,
    imageUrl: string,
  ){
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.description = desciption;
    this.imageUrl = imageUrl;
  }

}
