Here's a detailed **README.md** file for your project:

---

# **Hotel Management**

A comprehensive hotel management web application built with **Next.js**, leveraging modern libraries and tools like **TailwindCSS**, **Axios**, and **FontAwesome** to deliver a responsive and user-friendly experience.

---

## **Features**
- Fetch and display detailed information about a hotel using dynamic routing.
- Responsive UI for a seamless experience across devices.
- Modularized and reusable components for maintainable code.
- Integration with APIs for real-time data retrieval.
- Uses TypeScript for type safety and robust development.

---

## **Tech Stack**
- **Frontend**: Next.js, React, TailwindCSS
- **API Integration**: Axios, Fetch API
- **Testing**: Jest, React Testing Library
- **Icons**: FontAwesome

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js**: v16 or later
- **npm** or **yarn**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/zas03ia/Hotel_Management_Full_Flow.git
   cd Hotel_Management_Full_Flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file for environment variables:
   ```bash
   touch .env.local
   ```

   Add the following variable to `.env.local`:
   ```
   API_BASE_URL=<your-api-base-url>
   ```

---

### **Running the Project**

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

### **Build for Production**

To build the project for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

---

### **Testing**

Run the test suite:
```bash
npm run test
```

---

## **Project Structure**

```bash
.
├── components/
│   ├── Gallery.tsx
│   ├── Header.tsx
│   ├── Menu.tsx
│   ├── PropertyBooking.tsx
│   ├── PropertyDetails.tsx
│   ├── PropertyDetailsContinued.tsx
│   └── PropertyDetailsThird.tsx
├── app/
│   ├── page.tsx
│   └── hotel-details/[slug]/[hotel-id]/page.tsx
├── services/
│   └── api.ts
├── styles/
│   └── globals.css
├── .env.local
├── package.json
├── README.md
└── tsconfig.json
```

---

## **Key Components**

### **1. Dynamic Hotel Page**
Located in `/pages/[hotel-id].tsx`. Fetches hotel details using the `fetchHotel` function and displays components like `Gallery`, `PropertyDetails`, and `PropertyBooking`.

### **2. Reusable Components**
Components like `Gallery` and `PropertyBooking` are modular and reusable across multiple pages.

### **3. API Integration**
The `fetchHotel` function in `/services/api.ts` dynamically fetches hotel details based on the `hotelId` parameter.

---

## **Environment Variables**

| Variable       | Description                     |
|----------------|---------------------------------|
| `API_BASE_URL` | The base URL for the API.      |
| `FILE_BASE_URL` | The base URL for the image API.      |

---

## **Dependencies**

| Dependency                     | Purpose                                                                 |
|--------------------------------|-------------------------------------------------------------------------|
| `next`                         | Server-side rendering and static site generation.                      |
| `react`                        | Frontend library for building user interfaces.                         |
| `axios`                        | HTTP client for API requests.                                          |
| `jest`                         | Testing framework.                                                     |
| `@fortawesome/fontawesome-free`| Icon library for UI components.                                        |
| `tailwindcss`                  | CSS framework for responsive and modern UI design.                     |

---
