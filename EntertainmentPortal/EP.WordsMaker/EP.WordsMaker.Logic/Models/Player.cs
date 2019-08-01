﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EP.WordsMaker.Logic.Models
{
    /// <summary>
    /// Represents <c>Player</c> class.
    /// </summary>
    public class Player
    {
        /// <summary>
        /// ID property
        /// </summary>
        /// <value>Represents unique id of player</value>
        public string Id { get; set; }
       
        /// <summary>
        /// Name property
        /// </summary>
        /// <value>Represents nickname of player</value>
        public string Name { get; set; }

        /// <summary>
        /// Email property
        /// </summary>
        /// <value>Represents email adress of player</value>
		public string Email { get; set; }

        /// <summary>
        /// Score property
        /// </summary>
        /// <value>Represents score of player</value>
        public int Score { get; set; }
		public int BestScore { get; set; }
		
        public string Password { get; set; }
    }
}
