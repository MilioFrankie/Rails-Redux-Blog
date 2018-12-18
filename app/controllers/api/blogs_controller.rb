class Api::BlogsController < ApplicationController
  def index
    render json: Blog.all 
  end

  def show
    render json: @blog
  end

  def create
    blog = Blog.create(blog_params)
    if blog.save
      render json: blog
    else
      render json: { errors: blog.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    @blog.update(blog_params)
    if @blog.save
      render json: @blog
    else
      render json: { errors: @blog.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @blog.destroy
  end

  private

  def set_blog 
  @blog = Blog.find(params[:id])
  end

  def blog_params
  params.require(:blog).permit(:title, :body, :author)
  end

end
