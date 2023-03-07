data=d3.csv('https://raw.githubusercontent.com/charleyferrari/CUNY_DATA_608/master/module6/d3_lab/ue_industry.csv',d3.autoType).then(data=>{
    //Self note: Please remember to convert using autotype or we will spent 7 hours wondering why the line hasn't been create. pretty plz
    //We will make sure to convert the values to their designated type and with .then use the data for our problem
    //W/o .then() it will wait on the promise the data will come and not load in the data

    //Inspiration from 03scales.js from professor ferrari
    //Scaling our line graph within the domains of x and y to fit the svg plot
    var xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.index))
        .range([20, 1180]);
    
    var yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.Agriculture))
        .range([580, 20]);

    //Creating our line description for the svg for part 1, only plot data from the argicultural industry
    let line1=d3.line() 
        .x(d=>xScale(d.index))
        .y(d=>yScale(d.Agriculture));

    //Part 1, Select the first svg container and input the line graph in the position
    d3.select('#Chart_1')
        .append('path')
        .datum(data)
            .attr("fill","none")
            .attr('d',line1)
            .attr('stroke', '#2e2928');

    // Part 2 of the module. We are editing the 07offset.js by professor ferrari. Save us a headache a paste the data below
    const industries = ['Agriculture','Business services','Construction','Education and Health',
        'Finance','Government','Information','Leisure and hospitality','Manufacturing',
        'Mining and Extraction','Other','Self-employed','Transportation and Utilities',
        'Wholesale and Retail Trade'];

    const colors = ['#393b79', '#5253a3', '#6b6ecf', '#9c9ede', '#637939', '#8ca252', '#b5cf6b', 
        '#cedb9c', '#8b6d31', '#bd9e38', '#e7ba52', '#e7cb93', '#843c39', '#ad494a'];

    const totalYmax = d3.sum(
        industries.map(
            d => d3.max(data, e => e[d])
        )
    );
    

    var xxScale=d3.scaleLinear()
        .domain(d3.extent(data, d => d.index))
        .range([20, 1180]);
    
    var yyScale=d3.scaleLinear()
        .domain([0,totalYmax])
        .range([580,20]);
    
    var fillScale=d3.scaleOrdinal()
        .domain(industries)
        .range(colors);
    
    var stackLayout= d3.stack()
        .keys(industries)
        .offset(d3.stackOffsetSilhouette);
    
    var stackArea=d3.area()
        .x((d,i)=>xxScale(i))
        .y0(d=>yyScale(d[0]))
        .y1(d=>yyScale(d[1]));

    console.log(data)

    d3.select('#Chart_2')
        .selectAll('path')
        .data(stackLayout(data))
        .enter().append('path')
        .attr('d', d => stackArea(d))
        .style('fill', d => fillScale(d.key))
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr('transform', 'translate(0,-300)')
        ;

    
});
