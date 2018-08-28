module ProjectHelper
  def user_photos_by_album(album_id)
    # flickr = Flickr.new()
    # flickr.photos.search(:user_id => user_id).values_at(0..(photo_count - 1))
    flickr.photosets.getPhotos :photoset_id =>  album_id ,:extras => "url_m"
  end
  
  def render_flickr_sidebar_widget(album_id)
    begin
      albums = user_photos_by_album(album_id)
      info = flickr.photosets.getInfo :photoset_id => album_id
      title = info.title
      render :partial => 'photoPage', :locals => { :albums => albums, :info => info, :title => title }
    rescue Exception
      render :partial => 'error404'
    end
  end
end
