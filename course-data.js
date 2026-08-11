const COURSE_MODULES = [
  {
    id: 1, title: 'The design challenge', subtitle: 'Understand the need, user and evidence before designing a lunch bag.',
    sections: [
      {title:'1.1 Need statement and design brief', html:`<p>A <strong>need statement</strong> explains the problem or opportunity. Packed lunches often rely on disposable wrapping and bags, while food also needs to be carried securely. The project asks you to develop a reusable textile solution for carrying a packed lunch.</p><p>A <strong>design brief</strong> turns that need into a clear task. It identifies the product, intended user and important qualities without locking the designer into one answer.</p>`},
      {title:'1.2 Users and real needs', html:`<p>Good design begins with people. A student may need a lunch bag that is easy to carry, simple to open, suitable for their lunch and recognisable among other bags. The maker needs a design that can be produced safely with available materials, equipment, skills and lesson time.</p><p>Needs can compete. Extra decoration may add identity but also increase production time. A larger bag may hold more but be less convenient to carry.</p>`},
      {title:'1.3 Criteria, constraints and evidence', html:`<p><strong>Criteria</strong> describe how success will be judged. Useful criteria are specific and testable: “the closure keeps the flap shut during a carry test” is stronger than “it works”. <strong>Constraints</strong> are real limits such as available materials, tools, time, cost, skill and teacher-approved construction processes.</p><div class="callout"><strong>Evidence habit:</strong> connect every judgement to an observation, measurement, photograph or labelled design decision.</div>`}
    ]
  },
  {
    id: 2, title: 'Textiles around us', subtitle: 'Understand textile products, fibres, fabrics and useful properties.',
    sections: [
      {title:'2.1 Textiles in everyday life', html:`<p>Textiles are flexible materials made from fibres, yarns, fabrics or combinations of these. They appear in clothing, furnishings, transport, health products, protective equipment, packaging and household items.</p><p>The same textile is not suitable for every job. A lunch bag needs properties linked to carrying, repeated handling, cleaning, appearance and construction.</p>`},
      {title:'2.2 From fibre to fabric', html:`<p>A <strong>fibre</strong> is the smallest hair-like unit. Fibres can be twisted into <strong>yarn</strong>, and yarns can be woven or knitted into fabric. Some fabrics are made by bonding or felting fibres rather than interlacing yarns.</p><p>Knowing how a fabric is made helps predict how it may stretch, fray, fold, absorb moisture or behave during sewing.</p>`},
      {title:'2.3 Selecting by properties', html:`<p>Designers compare properties such as strength, flexibility, thickness, absorbency, durability, handle, appearance and ease of care. They also consider how easily a material can be marked, cut, pinned, pressed and sewn.</p><p>Record the actual materials available for your project and justify choices using observed properties. The approved outer fabric, lining and closure are <strong>Teacher to confirm</strong>.</p>`}
    ]
  },
  {
    id: 3, title: 'Sustainable lunch choices', subtitle: 'Connect reusable products, material choices and personal action.',
    sections: [
      {title:'3.1 The single-use problem', html:`<p>Single-use items are designed to be used briefly before disposal. Lunches can include plastic bags, wrap, cutlery, drink containers and packets. Their impacts depend on material, production, transport, use, collection and what happens after disposal.</p><p>A reusable product is not automatically impact-free. It must be used enough times, cared for and kept in service to replace disposable alternatives.</p>`},
      {title:'3.2 Product life cycle thinking', html:`<p>Life cycle thinking follows a product through raw materials, manufacture, transport, use, care, repair and end of life. Designers look for impacts and opportunities at every stage.</p><p>For a lunch bag, durability, washable construction, repairability, efficient material use and long-term user appeal can help extend useful life.</p>`},
      {title:'3.3 Personal action with evidence', html:`<p>Personal action is strongest when it is specific and measurable. Examples include using a reusable lunch bag regularly, replacing disposable wrap with an approved reusable option, planning food portions and caring for products so they last.</p><p>Avoid vague claims such as “this saves the planet”. State the action, the likely effect and the evidence you would collect.</p>`}
    ]
  },
  {
    id: 4, title: 'Tools, materials and safety', subtitle: 'Prepare a safe textile workspace and select each tool for its function.',
    sections: [
      {title:'4.1 Safe textile-work routines', html:`<p>Before using equipment, secure loose clothing and hair, remove or control jewellery as directed, prepare a clear workspace and ask for the teacher’s demonstration. Keep fingers away from the needle area and sew only at a speed you can control.</p><p>Switch off equipment before threading, inserting a bobbin or making adjustments unless the teacher demonstrates a different safe procedure for that machine.</p>`},
      {title:'4.2 Pins, scissors and steam irons', html:`<p>Never place pins or needles in your mouth. Store them in a pin cushion or approved container. Carry scissors closed with the points down and use fabric scissors only for fabric.</p><p>Steam and hot iron surfaces can burn. Check whether a material is safe to press, keep the iron stable, remain aware of others and follow the classroom routine for switching off and storing it.</p>`},
      {title:'4.3 A purposeful equipment list', html:`<p>The source folio asks students to record the real lining, closure, outer material and any other materials used. It also identifies sewing equipment such as the sewing machine, thread, bobbin, bobbin case, pins, pin cushion, tape measure, hand needle, scissors, ironing equipment and fabric-marking tools.</p><p>Your final material list should name only items actually used and include clear, labelled photographs or drawings.</p>`}
    ]
  },
  {
    id: 5, title: 'Develop and communicate ideas', subtitle: 'Generate alternatives, annotate decisions and present a final design.',
    sections: [
      {title:'5.1 Research and inspiration', html:`<p>Research helps a designer understand existing lunch bags, alternative packaging, closures, decorative approaches and user preferences. Useful research records the source, identifies a feature and explains how it may influence the project.</p><p>Do not copy a complete product. Combine and transform useful observations into an original response to the brief.</p>`},
      {title:'5.2 Generate different concepts', html:`<p>Strong design development produces several genuinely different concepts. Change meaningful features such as shape, proportion, closure, handle, pocket, colour arrangement or decorative technique.</p><p>Small thumbnail sketches help ideas appear quickly. Add annotations that explain function, material, construction, safety or user benefit.</p>`},
      {title:'5.3 Final design communication', html:`<p>A final design drawing should be clear enough for another person to understand. Show the overall form and label important materials, components, closures, decorative features and construction decisions.</p><p>Include views or details when one drawing cannot show enough. Final dimensions and construction details must match the teacher-approved project instructions.</p>`}
    ]
  },
  {
    id: 6, title: 'Know the sewing machine', subtitle: 'Identify major parts and explain what each part controls.',
    sections: [
      {title:'6.1 Thread path and stitch-forming parts', html:`<p>The upper thread travels from the spool through guides and tension controls to the needle. Below the fabric, the bobbin supplies a second thread. The machine interlocks the upper and bobbin threads to form a stitch.</p><p>Thread the exact classroom machine only after a teacher demonstration because thread paths and bobbin systems vary.</p>`},
      {title:'6.2 Holding and moving fabric', html:`<p>The presser foot holds fabric against the feed dogs. Feed dogs move the fabric in controlled steps as stitches form. The needle plate supports the fabric and provides an opening for the needle.</p><p>Guide fabric gently; do not pull it through the machine. Keep fingers clear of the moving needle and presser-foot area.</p>`},
      {title:'6.3 Controls and their purpose', html:`<p>Common controls may include a handwheel, presser-foot lifter, reverse control, stitch selector, stitch-length control and speed control. Their exact position and operation depend on the machine model.</p><p>Part numbers, settings and the approved starting configuration are <strong>Teacher to confirm</strong> from the classroom machine and demonstration.</p>`}
    ]
  },
  {
    id: 7, title: 'Set up and practise', subtitle: 'Build control before sewing the project pieces.',
    sections: [
      {title:'7.1 Threading and the bobbin', html:`<p>A correct setup follows the machine’s approved thread path, places the bobbin in the correct orientation and brings both threads into the starting position. Missed guides, incorrect tension paths or a poorly seated bobbin can cause loose, tangled or uneven stitching.</p><p>Prepare the machine while it is switched off and ask for a check before sewing.</p>`},
      {title:'7.2 Starting, guiding and finishing', html:`<p>Begin with the presser foot down, threads positioned as demonstrated and hands safely guiding the fabric. Watch the seam guide rather than staring only at the needle. Control speed so the fabric remains aligned.</p><p>Secure stitching using the teacher-approved method, stop with control and remove work without pulling against the needle.</p>`},
      {title:'7.3 Reading stitch quality', html:`<p>Balanced stitches look even on both sides of the fabric, without loops, puckering, skipped stitches or broken thread. Problems can come from threading, needle condition, bobbin placement, unsuitable settings or the way fabric is handled.</p><p>Stop when stitching changes unexpectedly. Do not keep sewing over a fault—check with the teacher and record the cause and correction.</p>`}
    ]
  },
  {
    id: 8, title: 'Decoration and surface design', subtitle: 'Use colour, shape and appliqué purposefully.',
    sections: [
      {title:'8.1 Visual design choices', html:`<p>Colour, line, shape, texture, pattern and proportion influence how a textile product communicates. A limited, deliberate colour scheme often creates a clearer identity than unrelated decoration.</p><p>Design for the intended user and connect decoration to the lunch-bag concept rather than adding features without purpose.</p>`},
      {title:'8.2 Appliqué as a technique', html:`<p>Appliqué places one fabric shape onto another surface and secures it with stitching or another approved method. Accurate templates, careful placement and controlled edges help the result look intentional.</p><p>The specific appliqué materials, adhesive products, stitch settings and pressing sequence must follow teacher instructions and product safety information.</p>`},
      {title:'8.3 Test before committing', html:`<p>A sample lets you check colour contrast, edge finish, stitch appearance, fabric behaviour and the time needed. Testing on scrap material protects the project pieces from avoidable mistakes.</p><p>Record what worked, what did not and the change you will make before producing the final decoration.</p>`}
    ]
  },
  {
    id: 9, title: 'Plan and construct', subtitle: 'Sequence production, control quality and record real progress.',
    sections: [
      {title:'9.1 Prepare resources and a workplan', html:`<p>A production plan lists the real materials, resources and equipment needed, then places tasks in a safe order. Include time for measuring, marking, cutting, pinning, sewing, pressing, checking, recording evidence and cleaning.</p><p>Use the teacher-approved lunch-bag instructions as the authority for exact pieces, dimensions, seam allowances, orientation and construction order.</p>`},
      {title:'9.2 Accuracy during construction', html:`<p>Check before each irreversible step. Confirm fabric orientation, match edges, keep pins placed as demonstrated, use the approved seam guide and remove pins safely. Press only when instructed and suitable for the material.</p><p>Small checks reduce cumulative error. A misplaced closure or reversed panel is easier to correct before it is permanently stitched.</p>`},
      {title:'9.3 Quality control and evidence', html:`<p>Quality control means checking the product during production, not waiting until the end. Inspect stitch balance, seam alignment, secure starts and finishes, closure position, decoration and overall shape.</p><p>Photograph real stages and annotate any problem, correction and result. Evidence should show decisions and skill—not only a finished product.</p>`}
    ]
  },
  {
    id: 10, title: 'Test, evaluate and improve', subtitle: 'Judge the finished solution against the brief using evidence.',
    sections: [
      {title:'10.1 Testing the product', html:`<p>Testing should match the criteria. A carry test can examine comfort and closure; a capacity test can check whether the intended lunch items fit; inspection can judge stitching, finish and decoration. Care testing must follow the approved material instructions.</p><p>Record the test method and result honestly. Do not change the criterion after seeing the outcome.</p>`},
      {title:'10.2 Evidence-based evaluation', html:`<p>An evaluation combines a criterion, evidence and judgement. “The closure stayed shut during three short carry trials, so the bag met my security criterion” is stronger than “it worked well”.</p><p>Discuss strengths and limitations. A successful feature can still be refined.</p>`},
      {title:'10.3 Specific improvement and reflection', html:`<p>A useful improvement changes a feature, process or decision and explains the expected benefit. “Move the closure 10 mm after checking the teacher-approved pattern” is more actionable than “make it better”.</p><p>Finish by reflecting on safe practice, skill development, sustainability decisions and how evidence changed your thinking.</p>`}
    ]
  }
];
