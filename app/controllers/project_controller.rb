class ProjectController < ApplicationController
  # after_action :render_page

  def index
  end

  # 新支線
  def productV1
    @title = '新支線'
    # @user = flickr.people.findByUsername(:username => 'yaoxiangz')
    # 所有照片
    @photos = flickr.people.getPublicPhotos :user_id => "102003626@N07"
    
    # 所有相簿
    @albums = flickr.photosets.getList :user_id => "102003626@N07"
    
    # 相簿照片
    # type [ id,primary,owner,owername,photo[{}] ]
    @album_1 = flickr.photosets.getPhotos :photoset_id => "72157671596816948",:extras => "url_s"
  end

  def productV2
    id = "72157691374202464"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV3
    id = "72157664586091678"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV4
    id = "72157689314292912"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV5
    id = "72157691374978194"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV6
    id = "72157664587379988"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV7
    id = "72157698928904994"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV8
    id = "72157697706718151"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def productV8
    id = "72157699356527965"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  # ===================================

  def weddingV1
    id = "72157671471188328"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def weddingV2
    id = "72157693547049570"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def weddingV3
    id = "72157699367504775"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  # ===================================

  def businessV1
    id = "72157675671761441"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def businessV2
    id = "72157671481556448"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def businessV3
    id = "72157677178014326"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def businessV3
    id = "72157699356903405"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  # ===================================

  def liveV1
    id = "72157673573325473"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end

  def liveV1
    id = "72157696176285902"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    render :productV1
  end



  # def render_page
  #   id = @id

  #   @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

  #   @info = flickr.photosets.getInfo :photoset_id => id
  #   @title = @info.title
  #   render :productV1
  # end
end
