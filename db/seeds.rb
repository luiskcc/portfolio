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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Ruby on Rails and React.',
    technologies: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis'],
    live_url: 'https://example-ecommerce.com',
    github_url: 'https://github.com/username/ecommerce-platform',
    image_url: 'project1.png'
  },
  {
    title: 'Task Management App',
    description: 'A Trello-like task management application with real-time updates.',
    technologies: ['Ruby on Rails', 'Hotwire', 'Stimulus', 'PostgreSQL'],
    live_url: 'https://example-taskmanager.com',
    github_url: 'https://github.com/username/task-manager',
    image_url: 'project2.png'
  },
  {
    title: 'Blog CMS',
    description: 'A content management system for blogs with markdown support.',
    technologies: ['Ruby on Rails', 'Vue.js', 'MySQL'],
    live_url: 'https://example-blogcms.com',
    github_url: 'https://github.com/username/blog-cms',
    image_url: 'project3.png'
  }
]

# Create each project
projects.each do |project_data|
  Project.create!(project_data)
end

puts "Created #{Project.count} projects"