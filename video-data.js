const COURSE_VIDEOS = (() => {
  const modules = {
    1:{id:'cmBf1fBRXms',title:'Convergent Thinking Versus Divergent Thinking',channel:'John Spencer',purpose:'See why designers first generate possibilities, then use evidence to narrow them.',watch:['Notice when the process opens up and when it narrows.','Connect user research to generating useful possibilities.','Identify evidence that could help select an idea.']},
    2:{id:'CGRsBDMSVGI',title:'Fibre to Yarn & Yarns to Fabric',channel:'AppuSeriesAcademy',purpose:'Follow the structural pathway from fibres to yarn and fabric.',watch:['Distinguish a fibre, yarn and fabric.','Notice how twisting produces yarn.','Compare weaving and knitting.']},
    3:{id:'GTs3w9zLwT8',title:"Australia's Plastic Waste Problem",channel:'Behind the News',purpose:'Connect lunch choices to the larger problem of plastic waste.',watch:['Identify the problem and why it matters.','Record consequences rather than only statistics.','Look for actions at personal and system levels.']},
    4:{id:'paMnZk_7tF8',title:'Sewing Machine Safety for Beginners',channel:'Niler Taylor',purpose:'Notice practical habits that reduce risk around a sewing machine.',watch:['Compare the workspace with your classroom routine.','List controls for moving and sharp parts.','Identify where teacher directions must take priority.']},
    5:{id:'cmBf1fBRXms',title:'Convergent Thinking Versus Divergent Thinking',channel:'John Spencer',purpose:'Use different modes of thinking to develop and select design concepts.',watch:['Look for ways to avoid the first-idea trap.','Identify changes that make concepts genuinely different.','Connect selection to criteria rather than preference.']},
    6:{id:'KUaanhs5quU',title:'How to Thread a Brother Sewing Machine',channel:'Brother Sews USA',purpose:'Observe a clear thread path while recognising that machine models differ.',watch:['Track the order of the thread guides.','Notice what happens around the take-up lever and needle.','List the details that must be confirmed for your class machine.']},
    7:{id:'5p617lj0pIs',title:'How to Thread Mechanical and Automatic Machines',channel:'Brother Sews USA',purpose:'Compare machine setup routines and the checks made before stitching.',watch:['Notice the difference between machine types.','Identify slow, deliberate setup checks.','Record only the routine demonstrated for your class machine.']},
    8:{id:'KU35RLcKYJQ',title:'Machine Applique Lesson #1',channel:'The Sewing Room Channel',purpose:'Observe how an applique sample is prepared and controlled before final production.',watch:['Notice how the shape and layers are prepared.','Watch how the edge is controlled during stitching.','Identify what should be tested on a sample before final production.']},
    10:{id:'cmBf1fBRXms',title:'Convergent Thinking Versus Divergent Thinking',channel:'John Spencer',purpose:'See evaluation and improvement as part of an iterative design process.',watch:['Identify where evidence changes a decision.','Separate judging from generating improvements.','Connect a specific improvement to a test result.']}
  };
  const output = {};
  Object.entries(modules).forEach(([moduleId, video]) => {
    video.watch.forEach((watchFor, index) => {
      output[`${moduleId}.${index + 1}`] = {id:video.id,title:video.title,channel:video.channel,purpose:video.purpose,watchFor};
    });
  });
  return output;
})();
