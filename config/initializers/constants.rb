unless ENV["AWS_SECRET_KEY"].nil?
  Amazon::Ecs.options = {
    :associate_tag => 'jay1980-22',
    :AWS_access_key_id => 'AKIAJMVEB42CHS7XAUNA',       
    :AWS_secret_key => ENV["AWS_SECRET_KEY"]
  }
end
  
ROOT_BROWSE_NODE_ID = 2275256051

ROOT_STORE = 'KindleStore'