
import { useState, useEffect } from 'react';
import { Grid2X2, List, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { cars, brands, bodyStyles, fuelTypes, transmissions, years } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { CarType } from '@/data/cars';
import { Separator } from '@/components/ui/separator';

const Inventory = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredCars, setFilteredCars] = useState<CarType[]>(cars);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBodyStyles, setSelectedBodyStyles] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  
  // Apply filters
  useEffect(() => {
    let result = [...cars];
    
    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter(car => selectedBrands.includes(car.brand));
    }
    
    // Filter by body style
    if (selectedBodyStyles.length > 0) {
      result = result.filter(car => selectedBodyStyles.includes(car.bodyStyle));
    }
    
    // Filter by fuel type
    if (selectedFuelTypes.length > 0) {
      result = result.filter(car => selectedFuelTypes.includes(car.fuelType));
    }
    
    // Filter by transmission
    if (selectedTransmissions.length > 0) {
      result = result.filter(car => selectedTransmissions.includes(car.transmission));
    }
    
    // Filter by year
    if (selectedYears.length > 0) {
      result = result.filter(car => selectedYears.includes(car.year.toString()));
    }
    
    // Filter by price range
    result = result.filter(car => car.price >= priceRange[0] && car.price <= priceRange[1]);
    
    // Apply sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'mileage') {
      result.sort((a, b) => a.mileage - b.mileage);
    }
    
    setFilteredCars(result);
  }, [selectedBrands, selectedBodyStyles, selectedFuelTypes, selectedTransmissions, selectedYears, priceRange, sortBy]);
  
  // Handle checkbox change
  const handleCheckboxChange = (value: string, currentSelected: string[], setter: (value: string[]) => void) => {
    if (currentSelected.includes(value)) {
      setter(currentSelected.filter(item => item !== value));
    } else {
      setter([...currentSelected, value]);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedBodyStyles([]);
    setSelectedFuelTypes([]);
    setSelectedTransmissions([]);
    setSelectedYears([]);
    setPriceRange([0, 200000]);
  };
  
  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000" 
            alt="Car inventory" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow text-center">
            Vehicle Inventory
          </h1>
          <p className="text-lg text-white/80 max-w-2xl text-center">
            Browse our extensive collection of premium vehicles to find your perfect match.
          </p>
        </div>
      </section>
      
      {/* Inventory Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar (Desktop) */}
            <div className="hidden lg:block w-72 shrink-0 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="mb-6">
                  <Slider
                    defaultValue={[0, 200000]}
                    value={priceRange}
                    max={200000}
                    step={1000}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Brand Filter */}
              <div>
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleCheckboxChange(brand, selectedBrands, setSelectedBrands)}
                      />
                      <label 
                        htmlFor={`brand-${brand}`} 
                        className="text-sm cursor-pointer select-none"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Body Style Filter */}
              <div>
                <h3 className="font-medium mb-3">Body Style</h3>
                <div className="space-y-2">
                  {bodyStyles.map(style => (
                    <div key={style} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`style-${style}`} 
                        checked={selectedBodyStyles.includes(style)}
                        onCheckedChange={() => handleCheckboxChange(style, selectedBodyStyles, setSelectedBodyStyles)}
                      />
                      <label 
                        htmlFor={`style-${style}`} 
                        className="text-sm cursor-pointer select-none"
                      >
                        {style}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Fuel Type Filter */}
              <div>
                <h3 className="font-medium mb-3">Fuel Type</h3>
                <div className="space-y-2">
                  {fuelTypes.map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`fuel-${type}`} 
                        checked={selectedFuelTypes.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(type, selectedFuelTypes, setSelectedFuelTypes)}
                      />
                      <label 
                        htmlFor={`fuel-${type}`} 
                        className="text-sm cursor-pointer select-none"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Transmission Filter */}
              <div>
                <h3 className="font-medium mb-3">Transmission</h3>
                <div className="space-y-2">
                  {transmissions.map(transmission => (
                    <div key={transmission} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`transmission-${transmission}`} 
                        checked={selectedTransmissions.includes(transmission)}
                        onCheckedChange={() => handleCheckboxChange(transmission, selectedTransmissions, setSelectedTransmissions)}
                      />
                      <label 
                        htmlFor={`transmission-${transmission}`} 
                        className="text-sm cursor-pointer select-none"
                      >
                        {transmission}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Year Filter */}
              <div>
                <h3 className="font-medium mb-3">Year</h3>
                <div className="space-y-2">
                  {years.map(year => (
                    <div key={year} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`year-${year}`} 
                        checked={selectedYears.includes(year.toString())}
                        onCheckedChange={() => handleCheckboxChange(year.toString(), selectedYears, setSelectedYears)}
                      />
                      <label 
                        htmlFor={`year-${year}`} 
                        className="text-sm cursor-pointer select-none"
                      >
                        {year}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                    <ChevronDown className={`h-3 w-3 ml-1 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  <span className="text-muted-foreground">
                    {filteredCars.length} {filteredCars.length === 1 ? 'result' : 'results'}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="mileage">Lowest Mileage</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border border-input rounded-md overflow-hidden">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`rounded-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid2X2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`rounded-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Mobile Filters */}
              {filtersOpen && (
                <div className="lg:hidden bg-card border border-border rounded-lg p-4 mb-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold">Filters</h2>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear All
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setFiltersOpen(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Price Range Filter */}
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Price Range</h3>
                      <Slider
                        defaultValue={[0, 200000]}
                        value={priceRange}
                        max={200000}
                        step={1000}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                    
                    {/* Brand Filter */}
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Brand</h3>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {brands.map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-brand-${brand}`} 
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => handleCheckboxChange(brand, selectedBrands, setSelectedBrands)}
                            />
                            <label 
                              htmlFor={`mobile-brand-${brand}`} 
                              className="text-sm cursor-pointer select-none"
                            >
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Body Style Filter */}
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Body Style</h3>
                      <div className="space-y-1">
                        {bodyStyles.map(style => (
                          <div key={style} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-style-${style}`} 
                              checked={selectedBodyStyles.includes(style)}
                              onCheckedChange={() => handleCheckboxChange(style, selectedBodyStyles, setSelectedBodyStyles)}
                            />
                            <label 
                              htmlFor={`mobile-style-${style}`} 
                              className="text-sm cursor-pointer select-none"
                            >
                              {style}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Fuel Type Filter */}
                    <div>
                      <h3 className="font-medium mb-2 text-sm">Fuel Type</h3>
                      <div className="space-y-1">
                        {fuelTypes.map(type => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`mobile-fuel-${type}`} 
                              checked={selectedFuelTypes.includes(type)}
                              onCheckedChange={() => handleCheckboxChange(type, selectedFuelTypes, setSelectedFuelTypes)}
                            />
                            <label 
                              htmlFor={`mobile-fuel-${type}`} 
                              className="text-sm cursor-pointer select-none"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* No Results */}
              {filteredCars.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No vehicles found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more results
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
              
              {/* Car Grid View */}
              {viewMode === 'grid' && filteredCars.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              )}
              
              {/* Car List View */}
              {viewMode === 'list' && filteredCars.length > 0 && (
                <div className="space-y-4">
                  {filteredCars.map(car => (
                    <div 
                      key={car.id} 
                      className="car-card flex flex-col md:flex-row overflow-hidden"
                    >
                      <div className="relative md:w-64 h-48">
                        <img
                          src={car.images[0]}
                          alt={car.title}
                          className="h-full w-full object-cover"
                        />
                        {car.isFeatured && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">{car.title}</h3>
                          <span className="text-primary font-bold">{formatPrice(car.price)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <span>Year:</span>
                            <span className="font-medium text-foreground">{car.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Mileage:</span>
                            <span className="font-medium text-foreground">
                              {new Intl.NumberFormat().format(car.mileage)} mi
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Fuel:</span>
                            <span className="font-medium text-foreground">{car.fuelType}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Transmission:</span>
                            <span className="font-medium text-foreground">{car.transmission}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {car.description.substring(0, 150)}...
                        </p>
                        <div className="mt-auto flex justify-end gap-3">
                          <Button variant="outline" size="sm">
                            Quick View
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Inventory;
