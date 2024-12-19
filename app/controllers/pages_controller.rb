class PagesController < ApplicationController
  def home
      @projects = Project.all
      @experiences = Experience.all
      @educations = Education.all
  end

  def projects
  end

  def experience
  end

  def education
  end

  def contact
  end
end
