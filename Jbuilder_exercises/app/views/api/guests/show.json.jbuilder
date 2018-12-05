
json.partial! 'api/guests/guest', guest: @guest
# json.array! @guest.gifts, :title, :description

json.gifts do 
  @guest.gifts.each do |gift|
    json.extract! gift, :title, :description
  end 
end