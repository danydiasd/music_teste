class Api::V1::UsersController < ApplicationController

    def create
      auth_params = SpotifyApiAdapter.login(params[:code])
      user_date = SpotifyApiAdapter.getUserData(auth_params["access_token"])

      user = User.find_or_create_by(user_params(user_data))
      img_url = user_data["images"][0] ? user_data["images"][0]["url"] : nil

      user.update(profile_img_url: img_url), access_token: auth_params["access_token"], refresh_token: auth_params["refresh_token"]
      render json: user.to_json(:except => [:access_token, :refresh_token, :created_at, :updated_at])
    end
    private

    def user_params(user_data)
      params = {
        email: user_data["email"],
        display_name: user_data["display_name"],
        spotify_url: user_data["external_urls"]["spotify"],
      }
    end
end
