﻿using System.Collections.Generic;

namespace EP.Balda.Web.Models
{
    public class Player
    {
        public string Name { get; set; } //nickname
        public string Login { get; set; }
        public string Password { get; set; }

        public IEnumerable<Word>
            Words { get; set; } //words this player guessed per one game
    }
}