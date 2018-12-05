# parites show 


    json.extract! @party, :name, :location
    json.guests do 
      json.array! @party.guests, :name
    end 

    json.gifts do 
      @party.guests.each do |guest|
        guest.gifts.each do |gift|
          json.extract! gift, :title, :description
        end 
      end
  end 
    
    # json.gifts do 
    #   @guest.gifts.each do |gift|
    #     json.extract! gift, :title, :description
    #   end 
    # end