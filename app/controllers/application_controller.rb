class ApplicationController < ActionController::Base
    def user_is_authenticated
        token = cookies.signed[:twitter_session_token]
        session = Session.find_by(token: token)
        redirect_to '/login' if session.nil?
    end
end
