
  @parties.each do |party|
    json.extract! party, :name, :location
    json.guests do 
      party.guests.each do |guest|
        json.extract! guest, :name
      end 
    end 
  end 
