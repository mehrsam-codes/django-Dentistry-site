# django-Dentistry-site
# 🦷 DentalCare

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" />
  <img src="https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge" />
</p>

---

## 📖 About

**DentalCare** is a modern and responsive dental clinic website built with **React** and **Vite**.

The project provides a clean user interface for presenting dental services, doctors, patient reviews, appointment booking, and frequently asked questions.

---

## ✨ Features

- 🏠 Modern Landing Page
- 🦷 Dental Services Section
- 👨‍⚕️ Doctors Section
- ⭐ Testimonials
- 📊 Statistics Section
- 📅 Appointment Booking Form
- ❓ FAQ
- 📱 Responsive Design
- ⚡ Fast Performance with Vite
- 🎨 Clean UI

---

## 🖼️ Pages

- Home
- Services
- Doctors
- Appointment
- FAQ
- Footer

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React | Frontend |
| Vite | Build Tool |
| CSS3 | Styling |
| React Icons | Icons |

---

## 📂 Project Structure

```
src/
│
├── assets/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── Services
│   ├── Doctors
│   ├── Testimonials
│   ├── Stats
│   ├── Appointment
│   ├── FAQ
│   └── Footer
│
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/dentalcare.git
```

Go to project folder

```bash
cd dentalcare
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## 📱 Responsive

✔ Desktop

✔ Tablet

✔ Mobile

---

## 🔮 Future Improvements

- Django REST API Integration
- Authentication
- Online Appointment System
- Admin Dashboard
- Blog System
- Dark Mode
- Google Maps
- Email Notifications

---

## 📸 Screenshots

Add screenshots here

```
/screenshots/home.png
/screenshots/services.png
/screenshots/doctors.png
```

---

## 🤝 Contributing

Pull requests are welcome.

---

## ⭐ Support

If you like this project, don't forget to leave a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
Made with ❤️ using React
</p>
# ⚙️ Backend (Django REST Framework)

The backend of this project is developed with **Django** and **Django REST Framework** to provide a secure, scalable, and RESTful API.

## 🚀 Backend Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 👨‍⚕️ Doctors Management
- 🦷 Dental Services Management
- 📅 Online Appointment Booking
- ⭐ Patient Testimonials
- ❓ FAQ API
- 📩 Contact Form API
- 📰 Blog System
- 🖼️ Image Upload
- 📄 Pagination
- 🔍 Search & Filtering
- 🛡️ Permissions & Authentication
- 📚 Swagger API Documentation
- ⚡ RESTful API

---

## 🛠 Backend Tech Stack

| Technology | Usage |
|------------|-------|
| Django | Backend Framework |
| Django REST Framework | REST API |
| PostgreSQL | Database |
| JWT | Authentication |
| Pillow | Image Upload |
| drf-spectacular | API Documentation |
| Gunicorn | Production Server |
| Docker | Containerization |

---

## 📂 Backend Structure

```
backend/
│
├── accounts/
├── appointments/
├── doctors/
├── services/
├── blog/
├── contact/
├── faq/
├── core/
│
├── config/
├── media/
├── static/
└── manage.py
```

---

## 📡 REST API

### Authentication

```
POST   /api/auth/register/
POST   /api/auth/login/
POST   /api/auth/refresh/
GET    /api/auth/profile/
PUT    /api/auth/profile/
```

### Doctors

```
GET    /api/doctors/
GET    /api/doctors/{id}/
```

### Services

```
GET    /api/services/
GET    /api/services/{id}/
```

### Appointments

```
POST   /api/appointments/
GET    /api/appointments/
GET    /api/appointments/{id}/
PATCH  /api/appointments/{id}/
DELETE /api/appointments/{id}/
```

### Blog

```
GET    /api/blog/
GET    /api/blog/{slug}/
```

### Contact

```
POST   /api/contact/
```

### FAQ

```
GET    /api/faq/
```

---

## ⚙ Backend Installation

```bash
git clone https://github.com/yourusername/dentalcare.git

cd backend

python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Create superuser

```bash
python manage.py createsuperuser
```

Run server

```bash
python manage.py runserver
```

Backend URL

```
http://127.0.0.1:8000
```

API Root

```
http://127.0.0.1:8000/api/
```

Admin Panel

```
http://127.0.0.1:8000/admin/
```

---

## 🔮 Future Plans

- 📧 Email Verification
- 📱 SMS Appointment Reminder
- 💳 Online Payment
- 🔔 Notifications
- 📊 Admin Dashboard
- 📈 Analytics
- 🌐 Multi-language Support
- ☁ Docker Deployment
