# ☕ CoffeeRN - Coffee Shop Mobile App

<div align="center">

A beautiful, modern mobile application for browsing and ordering coffee and desserts, built with React Native and Expo.

[![React Native](https://img.shields.io/badge/React%20Native-0.81.4-blue.svg)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~54.0.8-000020.svg)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Available Scripts](#-available-scripts)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**CoffeeRN** is a feature-rich mobile application designed for coffee enthusiasts. It provides an intuitive interface for browsing a variety of coffee drinks and desserts, managing shopping carts, and customizing orders. The app supports both iOS and Android platforms with a responsive design and smooth user experience.

---

## ✨ Features

### 🔐 **Authentication**
- User registration and sign-in functionality
- Email and password validation
- Secure authentication flow
- Password recovery options

### ☕ **Coffee Menu**
- Browse extensive coffee menu with 13+ varieties
- Detailed coffee descriptions and prices
- Filter by coffee types (Hot, Cold, Iced)
- High-quality coffee images
- Support for various coffee styles:
  - Espresso, Americano, Latte, Cappuccino
  - Macchiato, Mocha, Flat White, Cortado
  - Cold Brew, Affogato, and more

### 🍰 **Dessert Menu**
- Explore delicious dessert options
- Pairing suggestions with coffee
- Visual presentation of items

### 🛒 **Shopping Cart**
- Add/remove items from cart
- Quantity management
- Real-time price calculations
- Order summary and checkout

### ⚙️ **Settings & Customization**
- Theme customization (Light/Dark mode)
- User preferences management
- App settings configuration

### 🎨 **User Experience**
- Tab-based navigation for easy browsing
- Smooth animations and transitions
- Haptic feedback for interactions
- Toast notifications for user actions
- Responsive design for various screen sizes
- Platform-specific optimizations (iOS/Android)

---

## 📱 Screenshots
##

---

## 🛠 Tech Stack

### **Core Technologies**
- **React Native** (0.81.4) - Cross-platform mobile development
- **Expo** (~54.0.8) - Development platform and tooling
- **TypeScript** (5.9.2) - Type-safe development
- **React** (19.1.0) - UI library

### **Navigation & Routing**
- **Expo Router** (6.0.6) - File-based routing system
- **React Navigation** (7.1.8) - Navigation infrastructure
- **Bottom Tabs** (7.4.0) - Tab navigation

### **UI/UX Libraries**
- **React Native Reanimated** (4.1.0) - Smooth animations
- **React Native Gesture Handler** (2.28.0) - Touch interactions
- **React Native Swiper** (1.6.0) - Swipeable components
- **React Native Toast Message** (2.3.3) - Notifications
- **Expo Vector Icons** (15.0.2) - Icon library
- **Expo Haptics** (15.0.7) - Haptic feedback

### **Additional Features**
- **Expo Font** - Custom fonts support
- **Expo Image** - Optimized image handling
- **Safe Area Context** - Handle device safe areas
- **Screen Orientation** - Control app orientation

### **Development Tools**
- **ESLint** (9.25.0) - Code linting
- **TypeScript** - Static type checking

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **iOS Simulator** (Mac only) or **Android Studio** (for Android emulator)
- **Expo Go** app on your physical device (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/htay-htay-thwe/coffeeRN.git
   cd coffeeRN
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npx expo doctor
   ```

### Running the App

1. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

2. **Choose your platform**

   After running the start command, you'll see options to open the app:

   - Press `i` - Open in iOS Simulator (Mac only)
   - Press `a` - Open in Android Emulator
   - Press `w` - Open in web browser
   - Scan QR code with **Expo Go** app on your phone

3. **Platform-specific commands**
   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

---

## 📁 Project Structure

```
coffeeRN/
├── app/                          # Main application screens
│   ├── (tabs)/                   # Tab-based screens
│   │   ├── Cart.tsx             # Shopping cart screen
│   │   ├── Coffee.tsx           # Coffee menu screen
│   │   ├── Dessert.tsx          # Dessert menu screen
│   │   ├── Setting.tsx          # Settings screen
│   │   └── _layout.tsx          # Tab layout configuration
│   ├── Email.tsx                # Email input screen
│   ├── Orders.tsx               # Orders history
│   ├── Password.tsx             # Password screen
│   ├── Signin.tsx               # Sign in screen
│   ├── Signup.tsx               # Sign up screen
│   ├── Splash.tsx               # Splash screen
│   ├── _layout.tsx              # Root layout
│   └── +not-found.tsx           # 404 screen
│
├── assets/                       # Static assets
│   ├── fonts/                   # Custom fonts
│   └── images/                  # Images and icons
│       ├── menu/                # Coffee menu images
│       └── dessert/             # Dessert images
│
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   │   ├── collapsible.tsx
│   │   ├── icon-symbol.tsx
│   │   └── icon-symbol.ios.tsx
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
│
├── constants/                    # App constants and data
│   ├── Colors.ts                # Color definitions
│   ├── Desert.js                # Dessert data
│   ├── MenuImages.js            # Menu images mappings
│   ├── MenuItems.js             # Coffee menu data
│   └── Types.js                 # Coffee types
│
├── context/                      # React Context providers
│   └── ThemeContext.js          # Theme management
│
├── hooks/                        # Custom React hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
│
├── scripts/                      # Utility scripts
│   └── reset-project.js
│
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

---

## 🔑 Key Components

### **Authentication Flow**
- `Splash.tsx` - Initial app splash screen
- `Signin.tsx` - User login interface
- `Signup.tsx` - New user registration
- `Email.tsx` - Email verification
- `Password.tsx` - Password management

### **Main Features**
- `Coffee.tsx` - Browse and select coffee items
- `Dessert.tsx` - Explore dessert offerings
- `Cart.tsx` - Manage shopping cart
- `Orders.tsx` - View order history
- `Setting.tsx` - App preferences and settings

### **Theme System**
- `ThemeContext.js` - Centralized theme management
- Supports light and dark modes
- Consistent color scheme across the app

### **Data Management**
- `MenuItems.js` - Coffee menu with 13+ items
- `Desert.js` - Dessert catalog
- `Types.js` - Coffee type categorization

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Run on Android emulator/device |
| `npm run ios` | Run on iOS simulator (Mac only) |
| `npm run web` | Run in web browser |
| `npm run lint` | Run ESLint for code quality |
| `npm run reset-project` | Reset project to clean state |

---

## 💻 Development

### **Adding New Features**

1. **Create new screens** in the `app/` directory
2. **Add components** in the `components/` directory
3. **Define constants** in the `constants/` directory
4. **Use TypeScript** for type safety

### **Styling Guidelines**

- Use the theme context for consistent colors
- Follow React Native StyleSheet conventions
- Ensure responsive design for different screen sizes
- Test on both iOS and Android platforms

### **Code Quality**

```bash
# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 📦 Building for Production

### **iOS Build**
```bash
eas build --platform ios
```

### **Android Build**
```bash
eas build --platform android
```

### **Prerequisites for Building**
- Create an Expo account
- Install EAS CLI: `npm install -g eas-cli`
- Configure `eas.json` for build profiles

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Code Style**
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Authors

**Htay Htay Thwe**
- GitHub: [@htay-htay-thwe](https://github.com/htay-htay-thwe)
- Github: [@MyatHtoo](https://github.com/myat-htoo)

---

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Icons from [Expo Vector Icons](https://icons.expo.fyi/)
- React Native community for excellent documentation

---

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

<div align="center">

**Made with ❤️ and ☕**

If you found this project helpful, please consider giving it a ⭐!

</div>
