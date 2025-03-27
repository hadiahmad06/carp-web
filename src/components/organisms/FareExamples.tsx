
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/atoms/tabs';
import { Card, CardContent } from '@/components/atoms/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/atoms/alert';
import { Check, AlertTriangle, Car, User } from 'lucide-react';

const FareExamples = () => {
  const [activeTab, setActiveTab] = useState("rider");
  
  return (
    <section className="px-6 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Fare Examples</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how fares appear for both riders and drivers across different scenarios
          </p>
        </div>
        
        <Tabs defaultValue="rider" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="rider" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Rider View</span>
              </TabsTrigger>
              <TabsTrigger value="driver" className="flex items-center space-x-2">
                <Car className="h-4 w-4" />
                <span>Driver View</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Rider View Content */}
          <TabsContent value="rider" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Ride */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <div className="p-2 rounded-full bg-green-100 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  Standard Ride
                </h3>
                
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-muted/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">East Bank to South Bloomington</p>
                          <p className="text-sm text-muted-foreground">25 miles, 2 passengers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Departing in 25 mins</p>
                          <p className="text-xs text-muted-foreground">Hadi A. ★ 4.8</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Your fare</span>
                        <span className="text-xl font-bold text-carp-blue">$4.75</span>
                      </div>
                      
                      <div className="pt-2 border-t border-border">
                        <div className="flex justify-between text-sm">
                          <span>Driver's set price</span>
                          <span>$4.75 per rider</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Recommended price</span>
                          <span>$4.50 per rider</span>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-green-50 border border-green-100 rounded-md flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-green-800">This fare aligns with our recommended price based on distance, fuel costs, and parking.</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* High-Cost Ride */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <div className="p-2 rounded-full bg-amber-100 mr-3">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                  </div>
                  Higher Cost Ride
                </h3>
                
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-muted/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">East Plymouth to Valleyfair</p>
                          <p className="text-sm text-muted-foreground">25 miles, 3 passengers</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Departing tomorrow</p>
                          <p className="text-xs text-muted-foreground">Bruce C. ★ 4.6</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Your fare</span>
                        <span className="text-xl font-bold text-carp-blue">$11.25</span>
                      </div>
                      
                      <div className="pt-2 border-t border-border">
                        <div className="flex justify-between text-sm">
                          <span>Driver's set price</span>
                          <span>$11.25 per rider</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Recommended price</span>
                          <span>$8.60 per rider</span>
                        </div>
                      </div>
                      
                      <Alert className="bg-amber-50 border-amber-200">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <AlertTitle className="text-amber-800">Price exceeds recommendation</AlertTitle>
                        <AlertDescription className="text-amber-700 text-sm">
                          This fare is 31% above our recommended price. This may include additional tolls, premium hours, or other factors.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Driver View Content */}
          <TabsContent value="driver" className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Standard Ride */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <div className="p-2 rounded-full bg-green-100 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  Standard Price
                </h3>
                
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-muted/50">
                      <p className="font-medium">Set Your Price</p>
                      <p className="text-sm text-muted-foreground">Woodbury High School to Eagan YMCA</p>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Recommended Price</span>
                          <span className="font-bold text-carp-blue">$6.52</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on 12 miles, 28 MPG, $3.55/gal gas, $5 parking</p>
                      </div>
                      
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="mb-2">
                          <span className="text-sm font-medium">You've set the trip cost at:</span>
                          <div className="text-2xl font-bold text-carp-blue">$6.52</div>
                        </div>
                        
                        <div className="flex items-center text-sm text-green-600">
                          <Check className="h-4 w-4 mr-2" />
                          This price matches our recommendation
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-border space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>With 1 rider:</span>
                          <span className="font-medium">$3.26 per head</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>With 2 riders:</span>
                          <span className="font-medium">$2.17 per head</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Higher Ride Cost */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <div className="p-2 rounded-full bg-amber-100 mr-3">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                  </div>
                  Higher Price
                </h3>
                
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-muted/50">
                      <p className="font-medium">Set Your Price</p>
                      <p className="text-sm text-muted-foreground">UMN-TC to UW-Madison</p>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Recommended Price</span>
                          <span className="font-bold text-carp-blue">$31.13</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on 266.38 miles, 30 MPG, $3.50/gal gas</p>
                      </div>
                      
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="mb-2">
                          <span className="text-sm font-medium">You've set the trip cost at:</span>
                          <div className="text-2xl font-bold text-amber-600">$40.46</div>
                        </div>
                        
                        <div className="flex items-start text-sm text-amber-600">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-0.5" />
                          <span>This price is 31% above our recommendation</span>
                        </div>
                      </div>
                      
                      <Alert className="bg-amber-50 border-amber-200">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <AlertDescription className="text-amber-700 text-sm">
                          This ride may be less visible to riders as it exceeds 125% of the recommended price.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="pt-2 border-t border-border space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>With 1 rider:</span>
                          <span className="font-medium">$20.23 per head</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>With 2 riders:</span>
                          <span className="font-medium">$13.49 per head</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Lower Ride Cost */}
              <div>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <div className="p-2 rounded-full bg-blue-100 mr-3">
                    <AlertTriangle className="h-4 w-4 text-blue-600" />
                  </div>
                  Lower Price
                </h3>
                
                <Card className="h-full">
                  <CardContent className="p-0">
                    <div className="p-4 border-b border-border bg-muted/50">
                      <p className="font-medium">Set Your Price</p>
                      <p className="text-sm text-muted-foreground">East Bank to Palace Theatre, St. Paul</p>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Recommended Price</span>
                          <span className="font-bold text-carp-blue">$11.06</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Based on 7.7 miles, 25 MPG, $3.45/gal gas, $10 parking</p>
                      </div>
                      
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="mb-2">
                          <span className="text-sm font-medium">You've set the trip cost at:</span>
                          <div className="text-2xl font-bold text-blue-600">$8.85</div>
                        </div>
                        
                        <div className="flex items-start text-sm text-blue-600">
                          <AlertTriangle className="h-4 w-4 mr-2 mt-0.5" />
                          <span>This price is 20% below our recommendation</span>
                        </div>
                      </div>
                      
                      <Alert className="bg-blue-50 border-blue-200">
                        <AlertTriangle className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-700 text-sm">
                          This price is below the calculated cost. You may lose money on this carpool.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="pt-2 border-t border-border space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>With 1 rider:</span>
                          <span className="font-medium">$4.43 per head</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>With 2 riders:</span>
                          <span className="font-medium">$2.95 per head</span>
                        </div>
                        <div className="flex justify-between text-sm text-blue-600">
                          <span>Calculation gap:</span>
                          <span>-$2.25 total</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FareExamples;
