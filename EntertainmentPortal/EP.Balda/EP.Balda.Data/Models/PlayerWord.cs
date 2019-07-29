﻿namespace EP.Balda.Data.Models
{
    /// <summary>
    /// Table to form many-to-many relations.
    /// </summary>
    public class PlayerWord
    {
        /// <summary>
        /// Id property. Represents Id of the entry.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// PlayerId property. Represents Id of Player.
        /// </summary>
        public string PlayerId { get; set; }

        /// <summary>
        /// Player property. Navigation property of Player.
        /// </summary>
        public PlayerDb Player { get; set; }

        /// <summary>
        /// WordId property. Represents Id of word.
        /// </summary>
        public int WordId { get; set; }

        /// <summary>
        /// Word property. Navigation property of Word.
        /// </summary>
        public WordDb Word { get; set; }


        /// <summary>
        /// Game property. Navigation property of Game.
        /// </summary>
        public GameDb Game { get; set; }

        /// <summary>
        /// GameId property. Represents Id of game.
        /// </summary>
        public long GameId { get; set; }

        /// <summary>
        /// IsChosenByOpponnent property. Shows if word was chosen by opponent in single game.
        /// </summary>
        public bool IsChosenByOpponnent { get; set; }
    }
}