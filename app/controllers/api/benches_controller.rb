class Api::BenchesController < ApplicationController
  def index
    if bounds = params[:bounds]
      @benches = Bench.in_bounds(bounds)
    else
      @benches = Bench.all
    end
    render "api/benches/index"
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
