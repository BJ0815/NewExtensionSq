class ProjectController < ApplicationController
  # include ProjectHelper
  # before_action :get_params, only: :product

  USER_ID = '102003626@N07'

  PRODUCTS_ID = [
    '72157671596816948',
    '72157691374202464',
    '72157664586091678',
    '72157689314292912',
    '72157691374978194',
    '72157664587379988',
    '72157698928904994',
    '72157697706718151',
    '72157699356527965'
  ]

  WEDDINGS_ID = [
    '72157671471188328',
    '72157693547049570',
    '72157699367504775'
  ]

  BUSINESSES_ID = [
    '72157675671761441',
    '72157671481556448',
    '72157677178014326',
    '72157699356903405'
  ]

  LIVES_ID = [
    '72157673573325473',
    '72157696176285902'
  ]

  def index
    @products = PRODUCTS_ID

    @weddings = WEDDINGS_ID

    @businesses = BUSINESSES_ID

    @lives = LIVES_ID
  end


  # 作品展示頁（共用)
  def product
    album_id = params[:id]
    render :productV2, :locals => { :album_id => album_id}
  end

  # 個人創作 ＧＡ
  def gallery_product 
    render_gallery(PRODUCTS_ID,"個人創作")
  end

  # 演唱會紀實
  def gallery_live
    render_gallery(LIVES_ID,"演唱會紀實")
  end

  # 商業紀實
  def gallery_bussiness
    render_gallery(BUSINESSES_ID,"商業紀實")
  end

  # 婚禮紀實
  def gallery_wedding
    render_gallery(WEDDINGS_ID,"婚禮紀實")
  end


  # 新支線
  def productV1
    # @user = flickr.people.findByUsername(:username => 'yaoxiangz')
    # 所有照片
    @photos = flickr.people.getPublicPhotos :user_id => "102003626@N07"    
    # 所有相簿
    @albums = flickr.photosets.getList :user_id => "102003626@N07"
    id = "72157671596816948"
    # 相簿照片
    # type [ id,primary,owner,owername,photo[{}] ]
    @album_1 = flickr.photosets.getPhotos :photoset_id =>  id ,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    # render_flickr_sidebar_widget(album_id)
  end

  def productV2
    id = "72157691374202464"

    @album_1 = flickr.photosets.getPhotos :photoset_id => id,:extras => "url_s"

    @info = flickr.photosets.getInfo :photoset_id => id
    @title = @info.title
    # render :productV1
  end

  private

  def get_params
    # params.permit(:id)
  end

  def render_gallery(albums_id,title)
    begin
      # 所有albums
      all_albums = flickr.photosets.getList :user_id => USER_ID, :primary_photo_extras => "url_m"
      # 取出id符合的album
      results = all_albums.select { |d| albums_id.include?(d.id) }
      render :gallery, :locals => { :results => results, :title => title}
    rescue Exception
      render :partial => 'error404'
    end
  end
end
