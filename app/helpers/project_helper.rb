module ProjectHelper
  def user_photos_by_album(album_id)
    # flickr = Flickr.new()
    # flickr.photos.search(:user_id => user_id).values_at(0..(photo_count - 1))
    flickr.photosets.getPhotos :photoset_id =>  album_id ,:extras => "url_m,url_c"
  end
  
  def render_flickr_sidebar_widget(album_id)
    begin
      photos = user_photos_by_album(album_id)
      info = flickr.photosets.getInfo :photoset_id => album_id
      title = info.title
      render :partial => 'photoPage', :locals => { :albums => photos, :title => title }
    rescue Exception
      render :partial => 'error404'
    end
  end

  def render_flickr_photosets_list(user_id,album_ids,title)
    begin
      # 所有albums
      all_albums = flickr.photosets.getList :user_id => user_id, :primary_photo_extras => "url_m"
      # 取出id符合的album
      results = all_albums.select { |d| album_ids.include?(d.id) }
      render :gallery, :locals => { :albums => results, :title => title }
    rescue Exception
      render :partial => 'error404'
    end
  end
end
