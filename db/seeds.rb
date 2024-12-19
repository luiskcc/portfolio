# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Create projects
projects = [
  {
    title: 'Review Management System',
    description: 'A review management system for SMEs to boost their online reputation and increase sales.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'TailwindCSS', 'SERPAPI', 'Google Maps API', 'Scheduler'],
    live_url: 'https://dashboard.skyrocketreviews.co.uk',
    github_url: 'https://github.com/luiskcc/reputation-app-mvp',
    image_url: 'reputation.png'
  },
  {
    title: 'Call System',
    description: 'A straightforward call system for SMEs to make international calls and register their calls leveraging Twilio API.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'TailwindCSS', 'Twilio API', 'Heroku'],
    live_url: 'https://twilio-app-ktech-dc2cbe3ef487.herokuapp.com/',
    github_url: 'https://github.com/luiskcc/twilio-app-ktech',
    image_url: 'twilio.png'
  },
  {
    title: 'Telegram Meal Nutritionist Chatbot',
    description: 'A Telegram chatbot that helps users track their meals macronutrients and get nutritional advice by leveraging OpenAI vision API.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'OpenAI', 'Telegram API'],
    live_url: 'https://t.me/mealmaster7_bot',
    github_url: 'https://github.com/luiskcc/mastermeal',
    image_url: 'mealmaster.png'
  },
  {
    title: 'Holiday Chatbot',
    description: 'Chatbot that helps users find the best holiday deals and book flights and hotels.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'OpenAI API'],
    live_url: 'https://github.com/luiskcc/bodegas-canary',
    github_url: 'https://github.com/luiskcc/bodegas-canary',
    image_url: 'chatbot-holiday.png'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and TailwindCSS.',
    technologies: ['Next.js', 'TailwindCSS', 'React', 'PostgreSQL', 'Heroku', 'Redis', 'Sidekiq', 'Mailgun', 'Stripe'],
    live_url: 'https://frontends-demo.vercel.app/Specials-Sale/',
    github_url: 'https://github.com/luiskcc/ecommerce-nextjs',
    image_url: 'e-commerce.png'
  },
  {
    title: 'Event QR Code Check-in',
    description: 'A QR code check-in system for events to track attendance and manage registrations.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Bootstrap', 'QRCode', 'Scheduler'],
    live_url: 'https://github.com/luiskcc/golfest-qr-2',
    github_url: 'https://github.com/luiskcc/golfest-qr-2',
    image_url: 'golfest-qr.png'
  },
  {
    title: 'Geosocial App',
    description: 'A geosocial app that allows students to find pre-drinks and share their location and connect with others nearby.',
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Google Maps API', 'Heroku', 'Redis', 'Sidekiq', 'Mailgun', 'Ionic'],
    live_url: 'https://github.com/luiskcc/pres-backend',
    github_url: 'https://github.com/luiskcc/pres-backend',
    image_url: 'pres.png'
  },
  {
    title: 'More than 20 websites and Landing Pages',
    description: 'Landing pages for clients in the UK and Spain.',
    technologies: ['Ruby on Rails', 'MySQL', 'PostgreSQL', 'TailwindCSS', 'Heroku', 'Redis', 'Sidekiq', 'Mailgun', 'Ionic', 'Wordpress', 'SMTP', 'bootstrap'],
    live_url: 'https://codecandy.io',
    github_url: 'https://github.com/CodeCandy-io/CCCore',
    image_url: 'web-design.png'
  }
]
# Create each project
projects.each do |project_data|
  Project.create!(project_data)
end

puts "Created #{Project.count} projects"

experiences = [
    {
      title: 'Full Stack Developer',
      company: 'codecandy.io',
      period: 'Mar 2021 - Dec 2023',
      description: 'Developed and maintained various client projects using Ruby on Rails, React, and Vue.js.',
      position: 2
    },
    {
      title: 'Sales Representative',
      company: 'Bark UK, Paddington, London',
      period: 'Jan 2021 - June 2021',
      description: 'Sales representative for Bark, the largest marketplace and fast growing company in the UK.',
      position: 3
    }
]

experiences.each do |experience_data|
  Experience.create!(experience_data)
end

puts "Created #{Experience.count} experiences"

educations = [
  {
    degree: 'Software Engineering',
    school: 'Ravensbourne University, London, UK',
    period: '2021 - 2022',
    description: '',
    position: 1
  },
  {
    degree: 'BSc International Business',
    school: 'University of Kent, UK',
    period: '2018 - 2021',
    description: '',
    position: 1
  }
]

educations.each do |education_data|
  Education.create!(education_data)
  puts "Created #{Education.count} education"
end

