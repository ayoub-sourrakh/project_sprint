# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Product.create(name: "Collier en or", description: "Un beau collier en or 24 carats.", price: 75.99)
Product.create(name: "Montre élégante", description: "Montre suisse de haute précision.", price: 349.50)
Product.create(name: "Bracelet en cuir", description: "Bracelet en cuir véritable avec des ornements.", price: 45.00)
