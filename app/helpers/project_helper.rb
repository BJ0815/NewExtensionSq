module ProjectHelper
  def user_photos_by_album(album_id)
    flickr = Flickr.new()
    # flickr.photos.search(:user_id => user_id).values_at(0..(photo_count - 1))
    flickr.photosets.getPhotos :photoset_id =>  album_id ,:extras => "url_s"
  end
  
  def render_flickr_sidebar_widget(album_id)
    begin
      # photos = user_photos_by_album(album_id).in_groups_of(2)
      # @photos = user_photos_by_album(album_id)
      photos = flickr.photosets.getPhotos :photoset_id => album_id ,:extras => "url_s"
      info = flickr.photosets.getInfo :photoset_id => album_id
      title = @info.title
      render :partial => '/project/photoPage', :locals => { :photos => photos, :info => info, :title => title }
    rescue Exception
      render :partial => '/project/photoPage'
    end
  end
end
