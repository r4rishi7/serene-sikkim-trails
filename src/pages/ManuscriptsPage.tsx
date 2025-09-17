import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BookOpen, Eye, Download, Search, Filter, ChevronLeft, ChevronRight, FileText, Calendar, MapPin } from 'lucide-react';

const ManuscriptsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const manuscripts = [
    {
      id: 1,
      title: "Lotus Sutra",
      originalTitle: "सद्धर्मपुण्डरीकसूत्र",
      category: "Buddhist Scripture",
      monastery: "Rumtek Monastery",
      date: "15th Century",
      language: "Sanskrit",
      pages: 156,
      description: "One of the most important Mahayana Buddhist texts, teaching the doctrine of the One Vehicle.",
      condition: "Excellent",
      digitalQuality: "High Resolution",
      image: "/api/placeholder/400/500",
      textContent: "This sacred text reveals the eternal nature of Buddha and teaches that all beings have the potential for enlightenment. The Lotus Sutra emphasizes the universal possibility of attaining Buddhahood and presents the concept of skillful means (upaya) in Buddhist teaching."
    },
    {
      id: 2,
      title: "Prajnaparamita Sutra",
      originalTitle: "प्रज्ञापारमितासूत्र",
      category: "Wisdom Literature",
      monastery: "Pemayangtse Monastery",
      date: "12th Century",
      language: "Sanskrit",
      pages: 234,
      description: "The Perfection of Wisdom literature, central to Mahayana Buddhism philosophy.",
      condition: "Good",
      digitalQuality: "High Resolution",
      image: "/api/placeholder/400/500",
      textContent: "The Perfection of Wisdom teachings explore the concept of emptiness (sunyata) and the illusory nature of all phenomena. This text guides practitioners toward transcendent wisdom that leads to liberation from suffering and the realization of ultimate reality."
    },
    {
      id: 3,
      title: "Sikkim Royal Chronicles",
      originalTitle: "འབྲས་ལྗོངས་རྒྱལ་རབས།",
      category: "Historical Record",
      monastery: "Enchey Monastery",
      date: "18th Century",
      language: "Tibetan",
      pages: 89,
      description: "Historical records of Sikkim's royal lineage and monastery establishment.",
      condition: "Fair",
      digitalQuality: "Medium Resolution",
      image: "/api/placeholder/400/500",
      textContent: "These chronicles document the founding of Sikkim as a Buddhist kingdom and the establishment of major monasteries. They record the lineage of the Chogyal rulers and their patronage of Buddhist institutions, providing crucial insights into Sikkimese history and culture."
    },
    {
      id: 4,
      title: "Avalokiteshvara Sadhana",
      originalTitle: "अवलोकितेश्वर साधना",
      category: "Ritual Text",
      monastery: "Tashiding Monastery",
      date: "16th Century",
      language: "Sanskrit/Tibetan",
      pages: 67,
      description: "Meditation and ritual practices dedicated to the Bodhisattva of Compassion.",
      condition: "Excellent",
      digitalQuality: "Ultra High Resolution",
      image: "/api/placeholder/400/500",
      textContent: "This sadhana provides detailed instructions for meditation on Avalokiteshvara, the Bodhisattva of Compassion. It includes visualizations, mantras, and ritual procedures for developing compassion and wisdom, essential practices in Tibetan Buddhism."
    },
    {
      id: 5,
      title: "Tara Tantras",
      originalTitle: "तारा तन्त्र",
      category: "Tantric Text",
      monastery: "Dubdi Monastery",
      date: "14th Century",
      language: "Sanskrit",
      pages: 198,
      description: "Tantric practices and teachings related to the goddess Tara.",
      condition: "Good",
      digitalQuality: "High Resolution",
      image: "/api/placeholder/400/500",
      textContent: "The Tara Tantras present advanced Buddhist practices centered on the female bodhisattva Tara. These texts include twenty-one forms of Tara meditation, protective mantras, and elaborate ritual procedures for spiritual transformation and protection."
    },
    {
      id: 6,
      title: "Monastery Construction Manual",
      originalTitle: "དགོན་པ་འཛུགས་སྐྲུན་ལག་ལེན།",
      category: "Architecture Guide",
      monastery: "Phensang Monastery",
      date: "17th Century",
      language: "Tibetan",
      pages: 124,
      description: "Traditional guidelines for monastery architecture and sacred geometry.",
      condition: "Fair",
      digitalQuality: "Medium Resolution",
      image: "/api/placeholder/400/500",
      textContent: "This technical manual provides detailed instructions for constructing Buddhist monasteries according to traditional principles. It covers sacred geometry, proper orientations, symbolic decorations, and the spiritual significance of architectural elements."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Manuscripts', count: manuscripts.length },
    { id: 'Buddhist Scripture', name: 'Buddhist Scriptures', count: manuscripts.filter(m => m.category === 'Buddhist Scripture').length },
    { id: 'Wisdom Literature', name: 'Wisdom Literature', count: manuscripts.filter(m => m.category === 'Wisdom Literature').length },
    { id: 'Historical Record', name: 'Historical Records', count: manuscripts.filter(m => m.category === 'Historical Record').length },
    { id: 'Ritual Text', name: 'Ritual Texts', count: manuscripts.filter(m => m.category === 'Ritual Text').length },
    { id: 'Tantric Text', name: 'Tantric Texts', count: manuscripts.filter(m => m.category === 'Tantric Text').length },
    { id: 'Architecture Guide', name: 'Architecture Guides', count: manuscripts.filter(m => m.category === 'Architecture Guide').length }
  ];

  const filteredManuscripts = selectedCategory === 'all' 
    ? manuscripts 
    : manuscripts.filter(m => m.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredManuscripts.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? filteredManuscripts.length - 1 : prev - 1);
  };

  const ManuscriptDialog = ({ manuscript }: { manuscript: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-monastery-light text-monastery-green hover:bg-monastery-light">
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-monastery-green text-2xl">{manuscript.title}</DialogTitle>
          <DialogDescription className="text-lg">
            {manuscript.originalTitle} • {manuscript.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-monastery-light rounded-lg flex items-center justify-center">
              <BookOpen className="w-24 h-24 text-monastery-green" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-monastery-green">Manuscript Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monastery:</span>
                  <span className="font-medium">{manuscript.monastery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{manuscript.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <span className="font-medium">{manuscript.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pages:</span>
                  <span className="font-medium">{manuscript.pages}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition:</span>
                  <Badge className={`${
                    manuscript.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                    manuscript.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {manuscript.condition}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Digital Quality:</span>
                  <Badge variant="secondary">{manuscript.digitalQuality}</Badge>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1 btn-monastery">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1 border-monastery-light">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Online
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-monastery-green mb-3">Description</h3>
              <p className="text-muted-foreground">{manuscript.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-monastery-green mb-3">Text Content (English Translation)</h3>
              <ScrollArea className="h-64 w-full border border-monastery-light rounded-md p-4">
                <p className="text-sm leading-relaxed">{manuscript.textContent}</p>
              </ScrollArea>
            </div>

            <div className="bg-monastery-light/30 p-4 rounded-lg">
              <h4 className="font-semibold text-monastery-green mb-2">Access Information</h4>
              <ul className="text-sm space-y-1">
                <li>• High-resolution scans available for research</li>
                <li>• English translations provided where available</li>
                <li>• Original scripts preserved with digital restoration</li>
                <li>• Academic citations and references included</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-monastery-fade">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-4">
            Digital Manuscripts
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
            Explore ancient Buddhist texts, historical records, and sacred scriptures digitally preserved from Sikkim's monasteries
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 animate-monastery-slide">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-monastery-green text-white' 
                    : 'border-monastery-light text-monastery-green hover:bg-monastery-light'
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery View */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-monastery-green">Manuscript Gallery</h2>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevImage}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextImage}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {filteredManuscripts.length > 0 && (
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {filteredManuscripts.map((manuscript, index) => (
                <Card 
                  key={manuscript.id} 
                  className={`hover-monastery border-monastery-light cursor-pointer transition-monastery ${
                    index === currentImageIndex ? 'ring-2 ring-monastery-green' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="aspect-[4/5] bg-monastery-light rounded-t-lg flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-monastery-green" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-monastery-green text-sm mb-1">{manuscript.title}</h3>
                    <p className="text-xs text-muted-foreground">{manuscript.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Selected Manuscript Display */}
          {filteredManuscripts.length > 0 && (
            <Card className="border-monastery-light animate-monastery-fade">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[4/5] bg-monastery-light rounded-lg flex items-center justify-center">
                    <BookOpen className="w-32 h-32 text-monastery-green" />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-monastery-green mb-2">
                        {filteredManuscripts[currentImageIndex]?.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {filteredManuscripts[currentImageIndex]?.originalTitle}
                      </p>
                      <p className="text-muted-foreground">
                        {filteredManuscripts[currentImageIndex]?.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{filteredManuscripts[currentImageIndex]?.monastery}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{filteredManuscripts[currentImageIndex]?.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{filteredManuscripts[currentImageIndex]?.pages} pages</span>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="secondary">{filteredManuscripts[currentImageIndex]?.category}</Badge>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <ManuscriptDialog manuscript={filteredManuscripts[currentImageIndex]} />
                      <Button className="btn-monastery">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Text Content Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-monastery-green mb-8">Manuscript Texts (English Translations)</h2>
          
          <div className="space-y-6">
            {filteredManuscripts.map((manuscript, index) => (
              <Card key={manuscript.id} className="border-monastery-light animate-monastery-fade" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-monastery-green">{manuscript.title}</CardTitle>
                      <CardDescription className="text-base">{manuscript.originalTitle}</CardDescription>
                    </div>
                    <Badge variant="secondary">{manuscript.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {manuscript.monastery}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {manuscript.date}
                      </span>
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {manuscript.pages} pages
                      </span>
                    </div>
                  </div>
                  
                  <ScrollArea className="h-32 w-full border border-monastery-light rounded-md p-4 bg-monastery-light/10">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {manuscript.textContent}
                    </p>
                  </ScrollArea>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      {manuscript.description}
                    </p>
                    <div className="flex space-x-2">
                      <ManuscriptDialog manuscript={manuscript} />
                      <Button size="sm" className="btn-spiritual">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Information */}
        <section>
          <Card className="border-monastery-light bg-monastery-light/20">
            <CardHeader>
              <CardTitle className="text-monastery-green flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Research & Academic Use
              </CardTitle>
              <CardDescription>Guidelines for scholarly research and manuscript citation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-monastery-green mb-4">Citation Guidelines</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Include manuscript title, monastery source, and date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Reference digital collection and access date</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Credit Sikkim Digital Monasteries project</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Include original language and translation notes</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-monastery-green mb-4">Access & Permissions</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Educational use permitted with proper attribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Commercial use requires monastery permission</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>High-resolution images available for scholars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Expert consultation available for interpretation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default ManuscriptsPage;