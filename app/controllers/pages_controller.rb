class PagesController < ApplicationController
  def home
      @projects = Project.all
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
