# Tech Hub - Full Stack Website

A comprehensive website for a technology services company with Next.js frontend and Django backend.

## Project Structure

```
/
├── app/                     # Next.js frontend
│   ├── about/               # About page
│   ├── portfolio/           # Portfolio page
│   ├── page.tsx             # Home page
│   └── ...
├── backend/                 # Django backend
│   ├── api/                 # API application
│   ├── backend/             # Django project
│   ├── manage.py            # Django management
│   └── README.md            # Backend documentation
├── public/                  # Static files
├── package.json             # Frontend dependencies
└── requirements.txt         # Backend dependencies
```

## Features

### Frontend (Next.js)
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean, professional interface
- **Pages**: Home, About, Portfolio, Contact
- **Sections**: Services, Skills, Expertise, Team
- **Dark Mode**: Automatic dark/light theme support

### Backend (Django)
- **REST API**: Comprehensive API endpoints
- **Database Models**: Contact forms, Portfolio projects, Blog posts, Team members
- **Admin Interface**: Full content management system
- **Authentication**: User management and permissions
- **CORS Support**: Secure cross-origin requests

## Setup Instructions

### Frontend Setup

1. **Install dependencies:**
```bash
cd /path/to/project
npm install
```

2. **Run development server:**
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Create virtual environment:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Set up database:**
```bash
python manage.py migrate
```

4. **Create admin user:**
```bash
python manage.py createsuperuser
```

5. **Run development server:**
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/api/`

## API Integration

The Next.js frontend is configured to work with the Django backend API. Key integration points:

### Contact Form
- **Frontend**: `/app/page.tsx` (Contact section)
- **Backend**: `POST /api/contact/`

### Portfolio Projects
- **Frontend**: `/app/portfolio/page.tsx`
- **Backend**: `GET /api/portfolio/`

### Team Members
- **Frontend**: `/app/about/page.tsx`
- **Backend**: `GET /api/team/`

## Deployment

### Option 1: Separate Deployment

1. **Deploy Frontend**: Use Vercel, Netlify, or any static hosting
2. **Deploy Backend**: Use Python hosting (Heroku, AWS, DigitalOcean)
3. **Configure CORS**: Update `CORS_ALLOWED_ORIGINS` in backend settings

### Option 2: Combined Deployment

1. **Build Frontend**: `npm run build`
2. **Serve from Backend**: Configure Django to serve static files
3. **Use Proxy**: Set up reverse proxy for API routes

## Development Workflow

1. **Run both servers in parallel:**
   - Frontend: `npm run dev` (port 3000)
   - Backend: `python manage.py runserver` (port 8000)

2. **API Testing:**
   - Use Postman or curl to test API endpoints
   - Check admin interface at `http://localhost:8000/admin/`

3. **Database Management:**
   - Use Django migrations for schema changes
   - Access admin interface for content management

## Available Scripts

### Frontend
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Backend
- `python manage.py runserver`: Start development server
- `python manage.py migrate`: Apply database migrations
- `python manage.py makemigrations`: Create new migrations
- `python manage.py createsuperuser`: Create admin user
- `python manage.py shell`: Start Django shell

## Technologies Used

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

### Backend
- Django 6.0
- Django REST Framework
- SQLite (development)
- Pillow (image processing)
- CORS Headers

## Customization

### Frontend
- Edit pages in `/app/` directory
- Modify styles in `globals.css`
- Update navigation in `layout.tsx`

### Backend
- Add new models in `api/models.py`
- Create serializers in `api/serializers.py`
- Define views in `api/views.py`
- Add URL routes in `api/urls.py`

## License

This project is open source and available under the MIT License.