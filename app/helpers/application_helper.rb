module ApplicationHelper
  def nav_link_classes
    "inline-flex items-center justify-center rounded-md text-sm font-medium " \
    "transition-colors h-10 px-4 py-2 bg-transparent hover:bg-accent/10 text-foreground"
  end
end