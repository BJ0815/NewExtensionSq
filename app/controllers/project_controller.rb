class ProjectController < ApplicationController
  def index
  end

  def productV1
     # @user = flickr.people.findByUsername(:username => 'yaoxiangz')
    # 所有照片
    @photos = flickr.people.getPublicPhotos :user_id => "102003626@N07"
    
    # 所有相簿
    @albums = flickr.photosets.getList :user_id => "102003626@N07"
    
    # 相簿照片
    # type [ id,primary,owner,owername,photo[{}] ]
    @album_1 = flickr.photosets.getPhotos :photoset_id => "72157671596816948",:extras => "url_m"

  end
end
