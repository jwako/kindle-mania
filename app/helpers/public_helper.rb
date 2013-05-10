module PublicHelper
  
  def book_image(image_url, detail_page_url)
    if image_url.blank?
      link_to image_tag("no-image.jpg", :class => "thumbnail"), detail_page_url, :target => "_blank"
    else
      link_to image_tag(image_url, :class => "thumbnail"), detail_page_url, :target => "_blank"
    end
  end
  
end
