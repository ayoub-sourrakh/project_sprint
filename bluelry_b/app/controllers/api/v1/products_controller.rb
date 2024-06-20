class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.all.pluck(:name, :price, :id)
    render json: @products
  end
end